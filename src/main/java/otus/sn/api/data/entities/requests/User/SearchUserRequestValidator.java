package otus.sn.api.data.entities.requests.User;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

@Component
public class SearchUserRequestValidator implements Validator{

    @Override
    public boolean supports(Class<?> classname) {
        return SearchUserRequest.class.equals(classname);
    }

    @Override
    public void validate(Object target, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstName", "data.invalid");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "lastName", "data.invalid");
    }
    
}
