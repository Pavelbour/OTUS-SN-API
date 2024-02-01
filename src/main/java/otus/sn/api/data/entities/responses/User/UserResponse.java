package otus.sn.api.data.entities.responses.User;

import java.sql.Date;

public record UserResponse(
        String id,
        String firstName,
        String lastName,
        Date birthday,
        String biography,
        String city) {

}
