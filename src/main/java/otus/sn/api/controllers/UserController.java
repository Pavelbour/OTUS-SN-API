package otus.sn.api.controllers;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import otus.sn.api.data.entities.User;
import otus.sn.api.data.entities.requests.User.RegisterNewUserRequest;
import otus.sn.api.data.entities.requests.User.RegisterNewUserRequestValidator;
import otus.sn.api.data.entities.responses.User.UserNotFoundResponse;
import otus.sn.api.data.entities.responses.User.RegisterUserResponse;
import otus.sn.api.data.entities.responses.User.SingleUserResponse;
import otus.sn.api.data.entities.responses.User.UserResponse;
import otus.sn.api.data.entities.responses.User.UserResponseInvalidData;
import otus.sn.api.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final RegisterNewUserRequestValidator validator;

    public UserController(RegisterNewUserRequestValidator validator, UserService userService) {
        this.validator = validator;
        this.userService = userService;
    }

    @InitBinder
    private void initBinder(WebDataBinder binder) {
        binder.setValidator(validator);
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> registerNewUser(@Validated @RequestBody RegisterNewUserRequest request,
            BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new UserResponseInvalidData("Invalid data."));
        }

        return ResponseEntity.status(HttpStatus.OK)
                .body(new RegisterUserResponse(userService.save(request)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable String id) {
        Optional<User> user = userService.findUserById(id);

        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new UserNotFoundResponse(String.format("User %s not found.", id)));
        }

        User userData = user.get();
        return ResponseEntity.status(HttpStatus.OK)
                .body(new SingleUserResponse(userData.id(), userData.firstName(), userData.lastName(),
                        userData.birthday(), userData.biography(), userData.city()));
    }
}
