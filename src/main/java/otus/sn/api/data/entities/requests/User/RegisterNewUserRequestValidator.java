package otus.sn.api.data.entities.requests.User;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

@Component
public class RegisterNewUserRequestValidator implements Validator {

    private static final int MINIMUM_PASSWORD_LENGTH = 8;

    @Override
    public boolean supports(Class<?> classname) {
        return RegisterNewUserRequest.class.equals(classname);
    }

    @Override
    public void validate(Object target, Errors errors) {
        ValidationUtils.rejectIfEmpty(errors, "firstName", "Data invalid");
        ValidationUtils.rejectIfEmpty(errors, "password", "Data invalid");
        RegisterNewUserRequest request = (RegisterNewUserRequest) target;
        if (request.password() != null && request.password().trim().length() < MINIMUM_PASSWORD_LENGTH) {
            errors.rejectValue("password", "data.invalid");
        }
    }
}
