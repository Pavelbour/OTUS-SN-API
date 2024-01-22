package otus.sn.api.data.entities.responses.Login;

public record UserNotFoundResponse(
    String error
) implements UserLoginResponse {
}
