package otus.sn.api.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import otus.sn.api.data.Exceptions.InvalidDataException;
import otus.sn.api.data.entities.User;
import otus.sn.api.data.entities.requests.User.RegisterNewUserRequest;
import otus.sn.api.data.entities.requests.User.RegisterNewUserRequestValidator;
import otus.sn.api.data.entities.requests.User.SearchUserRequest;
import otus.sn.api.data.entities.requests.User.SearchUserRequestValidator;
import otus.sn.api.data.entities.responses.User.UserNotFoundResponse;
import otus.sn.api.data.entities.responses.InvalidDataResponse;
import otus.sn.api.data.entities.responses.User.RegisterUserResponse;
import otus.sn.api.data.entities.responses.User.UserResponse;
import otus.sn.api.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final RegisterNewUserRequestValidator validator;
    private final SearchUserRequestValidator searchValidator;

    public UserController(RegisterNewUserRequestValidator validator, UserService userService,
            SearchUserRequestValidator searchValidator) {
        this.validator = validator;
        this.userService = userService;
        this.searchValidator = searchValidator;
    }

    @InitBinder("registerNewUserRequest")
    private void initBinder(WebDataBinder binder) {
        binder.addValidators(validator);
    }

    @InitBinder("searchUserRequest")
    private void initSearchBinder(WebDataBinder binder) {
        binder.addValidators(searchValidator);
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterUserResponse> registerNewUser(@Validated @RequestBody RegisterNewUserRequest request,
            BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            throw new InvalidDataException();
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(new RegisterUserResponse(userService.save(request)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable String id) {
        Optional<User> user = userService.findUserById(id);

        if (user.isEmpty()) {
            throw new UsernameNotFoundException(String.format("User with id: %s not found.", id));
        }

        User userData = user.get();
        return ResponseEntity.status(HttpStatus.OK)
                .body(new UserResponse(userData.id(), userData.firstName(), userData.lastName(),
                        userData.birthday(), userData.biography(), userData.city()));
    }

    @GetMapping("/search")
    public List<UserResponse> search(@Validated SearchUserRequest request, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InvalidDataException();
        }

        List<UserResponse> users = userService.search(request);
        return users;
    }

    @ExceptionHandler({ UsernameNotFoundException.class })
    public ResponseEntity<UserNotFoundResponse> handleUserNotFoundException(UsernameNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new UserNotFoundResponse(exception.getMessage()));
    }

    @ExceptionHandler({ InvalidDataException.class })
    public ResponseEntity<InvalidDataResponse> handleInvalidDataException(InvalidDataException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new InvalidDataResponse(exception.getMessage()));
    }
}
