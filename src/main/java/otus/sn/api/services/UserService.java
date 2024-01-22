package otus.sn.api.services;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import otus.sn.api.data.entities.User;
import otus.sn.api.data.entities.requests.User.RegisterNewUserRequest;
import otus.sn.api.data.repositories.UserRepository;

@Service
public class UserService {

    private final PasswordEncoder encoder;
    private final UserRepository repository;

    public UserService(PasswordEncoder encoder, UserRepository repository) {
        this.encoder = encoder;
        this.repository = repository;
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

    public Optional<User> findUserById(String id) {
        return repository.findById(id);
    }
}
