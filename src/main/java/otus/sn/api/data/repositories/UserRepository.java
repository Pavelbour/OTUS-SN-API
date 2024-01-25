package otus.sn.api.data.repositories;

import org.springframework.data.repository.CrudRepository;

import jakarta.annotation.Nonnull;
import otus.sn.api.data.entities.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, String> {

    public User save(@Nonnull User user);
    public Optional<User> findById(String id);
}
