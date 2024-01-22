package otus.sn.api.data.entities.requests.User;

import java.sql.Date;

public record RegisterNewUserRequest(
        String id,
        String firstName,
        String lastName,
        String city,
        Date birthday,
        String biography,
        String password
) {
}
