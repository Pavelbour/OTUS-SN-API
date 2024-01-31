package otus.sn.api.data.repositories;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.annotation.Nonnull;
import otus.sn.api.data.entities.User;
import otus.sn.api.data.entities.responses.User.UserResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    public User save(@Nonnull User user);
    public <S extends User> Iterable<S> saveAll(Iterable<S> users);
    public Optional<User> findById(String id);

    @Query("SELECT id, first_name, last_name, city, birthday, biography FROM users_tbl WHERE first_name LIKE :firstName || '%' AND last_name LIKE :lastName || '%' ORDER BY id")
    public List<UserResponse> search(@Param("firstName") String firstName, @Param("lastName") String lastName);
}
