package otus.sn.api.data.entities.responses.User;

public record UserNotFoundResponse(
    String error
) implements UserResponse {
}
