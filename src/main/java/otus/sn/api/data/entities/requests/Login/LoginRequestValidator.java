package otus.sn.api.data.entities.requests.Login;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class LoginRequestValidator implements Validator {

    private final static String UUID_REGEX = "[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}";
    
    @Override
    public boolean supports(Class<?> classname) {
        return LoginRequest.class.equals(classname);
    }

    @Override
    public void validate(Object target, Errors errors) {
        ValidationUtils.rejectIfEmpty(errors, "userId", "Invalid data");
        ValidationUtils.rejectIfEmpty(errors, "password", "Invalid data");
        LoginRequest request = (LoginRequest) target;
        Matcher matcher = Pattern.compile(UUID_REGEX).matcher(request.userId());
        if(request.userId() != null && !matcher.matches()) {
            errors.reject("data.invalid");
        }
    }
}
