package otus.sn.api.data.entities.responses.User;

public record UserResponseInvalidData(
    String error
) implements UserResponse {
    
}
