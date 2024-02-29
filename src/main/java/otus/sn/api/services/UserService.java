package otus.sn.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import otus.sn.api.config.DefaultUserData;
import otus.sn.api.data.entities.User;
import otus.sn.api.data.entities.requests.User.RegisterNewUserRequest;
import otus.sn.api.data.entities.requests.User.SearchUserRequest;
import otus.sn.api.data.entities.responses.User.UserResponse;
import otus.sn.api.data.repositories.UserRepository;

@Service
public class UserService {

    private final PasswordEncoder encoder;
    private final UserRepository repository;
    private final DefaultUserData userData;

    public UserService(PasswordEncoder encoder, UserRepository repository, DefaultUserData userData) {
        this.encoder = encoder;
        this.repository = repository;
        this.userData = userData;
    }

    public String save(RegisterNewUserRequest request) {
        User user = new User(
                null,
                request.firstName(),
                request.lastName(),
                request.birthday(),
                request.biography(),
                request.city(),
                encoder.encode(request.password()));
        return repository.save(user).id();
    }

    public void saveAll(List<User> users) {
        repository.saveAll(users);
    }

    public void saveAllUsersWithDefaultPassword(List<User> users) {
        repository.saveAll(setDefaultData(users));
    }

    public Optional<User> findUserById(String id) {
        return repository.findById(id);
    }

    public List<UserResponse> search(SearchUserRequest user) {
        return repository.search(user.firstName(), user.lastName());
    }

    private List<User> setDefaultData(List<User> users) {
        List<User> userList = new ArrayList<>();
        String defaultPassword = encoder.encode(userData.password());

        for (User user : users) {
            userList.add(new User(
                null,
                user.firstName(),
                user.lastName(),
                user.birthday(),
                user.biography(),
                user.city(),
                defaultPassword
            ));
        }
        return userList;
    }
}
