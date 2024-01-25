package otus.sn.api.data.entities.responses.Login;

public record UserLoginBadRequestResponse(
    String error
)  implements UserLoginResponse {
    
}
