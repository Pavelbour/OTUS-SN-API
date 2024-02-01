package otus.sn.api.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import otus.sn.api.data.Exceptions.InvalidDataException;
import otus.sn.api.data.entities.requests.Login.LoginRequest;
import otus.sn.api.data.entities.requests.Login.LoginRequestValidator;
import otus.sn.api.data.entities.responses.InvalidDataResponse;
import otus.sn.api.data.entities.responses.Login.LoginResponse;
import otus.sn.api.data.entities.responses.User.UserNotFoundResponse;
import otus.sn.api.services.AuthenticationService;
import otus.sn.api.services.TokenService;

@RestController
public class LoginController {

    private final AuthenticationService authenticationService;
    private final LoginRequestValidator validator;
    private final TokenService tokenService;

    public LoginController(
            TokenService tokenService,
            AuthenticationService authenticationService,
            LoginRequestValidator validator) {
        this.authenticationService = authenticationService;
        this.tokenService = tokenService;
        this.validator = validator;
    }

    @InitBinder
    protected void initBinder(WebDataBinder binder) {
        binder.setValidator(validator);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> token(@Validated @RequestBody LoginRequest loginRequest,
            BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new InvalidDataException();
        }

        Authentication authentication = authenticationService.authenticate(loginRequest);

        return ResponseEntity.status(HttpStatus.OK)
                .body(new LoginResponse(tokenService.generateToken(authentication)));
    }

    @ExceptionHandler({ AuthenticationException.class })
    public ResponseEntity<UserNotFoundResponse> handleAuthenticationException(AuthenticationException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new UserNotFoundResponse(exception.getMessage()));
    }

    @ExceptionHandler({ InvalidDataException.class })
    public ResponseEntity<InvalidDataResponse> handleInvalidDataException(InvalidDataException exception) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body(new InvalidDataResponse(exception.getMessage()));
    }
}
