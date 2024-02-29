package otus.sn.api.data.repositories;

import java.sql.Date;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import otus.sn.api.data.entities.User;
import otus.sn.api.data.entities.responses.User.UserResponse;

@Repository
public class UserRepository {
    static private final int CHUNK_SIZE = 10000;
    private final BaseRepository baseRepository;

    public UserRepository(BaseRepository baseRepository) {
        this.baseRepository = baseRepository;
    }

    public User save(User user) {
        List<Object> data = new ArrayList<>();
        data.add(user.firstName());
        data.add(user.lastName());
        data.add(user.birthday());
        data.add(user.biography());
        data.add(user.city());
        data.add(user.password());

        String userId = baseRepository.updateEntity(new BaseRepository.RequestData(
            "INSERT INTO users_tbl(first_name, last_name, birthday, biography, city, password) VALUES (?, ?, ?, ?, ?, ?)",
            data)
        ).getFirst();

        return new User(
            userId,
            user.firstName(),
            user.lastName(),
            user.birthday(),
            user.biography(),
            user.city(),
            null
        );
    }

    public void saveAll(List<User> users) {
        List<List<User>> chunks = baseRepository.splitInChunks(users, CHUNK_SIZE);
        Iterator<List<User>> chunksIterator = chunks.iterator();

        Instant overAllTime = Instant.now();
        while (chunksIterator.hasNext()) {
            List<User> chunk = (List<User>) chunksIterator.next();      
            saveChank(chunk, chunks.indexOf(chunk));      
        }
        
        Instant overallFinish = Instant.now();
        Duration duration = Duration.between(overAllTime, overallFinish);
        System.out.println("Overall time is " + duration.toMinutes() + " Min " + duration.toSeconds() + "." + duration.toMillis() + " Sec.");
    }

    public Optional<User> findById(String id) {
        List<Object> data = new ArrayList<>();
        data.add(id);
        List<List<String>> result = baseRepository.fetchEntity(new BaseRepository.RequestData(
            "SELECT * FROM users_tbl WHERE id =?",
            data
        ));

        if (result.size() == 0) {
            return Optional.empty();
        }

        List<String> userData = result.getFirst();

        return Optional.of(new User(
            userData.get(0),
            userData.get(1),
            userData.get(2),
            Date.valueOf(userData.get(3)),
            userData.get(4),
            userData.get(5),
            userData.get(6)
        ));
    }

    public List<UserResponse> search(String firstName, String lastName) {
        List<Object> data = new ArrayList<>();
        List<UserResponse> users = new ArrayList<>();

        data.add(firstName);
        data.add(lastName);

        List<List<String>> result = baseRepository.fetchEntity(new BaseRepository.RequestData(
            "SELECT id, first_name, last_name, birthday, biography, city FROM users_tbl WHERE first_name LIKE ? || '%' AND last_name LIKE ? || '%' ORDER BY id",
            data
        ));

        Iterator<List<String>> resulIterator = result.iterator();
        while (resulIterator.hasNext()) {
            List<String> userData = (List<String>) resulIterator.next();
            users.add(new UserResponse(
                userData.get(0),
                userData.get(1),
                userData.get(2),
                Date.valueOf(userData.get(3)),
                userData.get(4),
                userData.get(5)
            ));
        }

        return users;
    }

    private void saveChank(List<User> chunk, int indexOfChunk) {
        Instant start = Instant.now();
        baseRepository.updateEntity(new BaseRepository.RequestData(getSaveChunkQuery(chunk), setSaveChunkQueryValues(chunk)));
        Instant finish = Instant.now();
        Duration duration = Duration.between(start, finish);
        System.out.println("Chunk #" + (indexOfChunk + 1) + " processed in " + duration.toMinutes() + " Min " + duration.toSeconds() + "." + duration.toMillis() + " Sec.");
    }

    private String getSaveChunkQuery(List<User> chunk) {
        StringBuilder queryBuilder = new StringBuilder();
        queryBuilder.append("INSERT INTO users_tbl(first_name, last_name, birthday, biography, city, password) VALUES ");
        Iterator<User> iterator = chunk.iterator();
        while (iterator.hasNext()) {
            iterator.next();
            queryBuilder.append("(?, ?, ?, ?, ?, ?)");
            if (iterator.hasNext()) {
                queryBuilder.append(", ");
            }
        }

        return queryBuilder.toString();
    }

    private List<Object> setSaveChunkQueryValues(List<User> chunk) {
        List<Object> values = new ArrayList<>();
        Iterator<User> userIterator = chunk.iterator();
        while (userIterator.hasNext()) {
            User user = (User) userIterator.next();
            values.add(user.firstName());
            values.add(user.lastName());
            values.add(user.birthday());
            values.add(user.biography());
            values.add(user.city());
            values.add(user.password());
        }

        return values;
    }
}
