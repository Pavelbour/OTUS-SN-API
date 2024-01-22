package otus.sn.api.data.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.sql.Date;

@Table("users_tbl")
public record User(
        @Id String id,
        String firstName,
        String lastName,
        Date birthday,
        String biography,
        String city,
        String password
) {     
}
