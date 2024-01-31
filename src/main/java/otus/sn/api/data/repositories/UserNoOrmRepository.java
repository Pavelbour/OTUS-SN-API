package otus.sn.api.data.repositories;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.springframework.stereotype.Repository;

import otus.sn.api.config.ConnectionData;
import otus.sn.api.data.entities.responses.User.UserResponse;

@Repository
public class UserNoOrmRepository {
    private final ConnectionData connectionData;

    public UserNoOrmRepository(ConnectionData connectionData) {
        this.connectionData = connectionData;
    }

    public List<UserResponse> search(String firstName, String lastName) {
        
        List<UserResponse> users = new ArrayList<>();
        try {
            Connection connection = getConnection();
            PreparedStatement statement = connection.prepareStatement("SELECT id, first_name, last_name, birthday, biography, city FROM users_tbl WHERE first_name LIKE ? || '%' AND last_name LIKE ? || '%' ORDER BY id");
            statement.setString(1, firstName);
            statement.setString(2, lastName);
            ResultSet resultSet = statement.executeQuery();
            users = processResultSet(resultSet);
            statement.close();
            connection.close();
        } catch (SQLException exception) {
            System.err.println(exception.getMessage());
        }

        return users;
    }

    private Connection getConnection() throws SQLException {
        String url = connectionData.url();
        Properties properties = new Properties();
        properties.setProperty("user", connectionData.username());
        properties.setProperty("password", connectionData.password());

        return DriverManager.getConnection(url, properties);
    }

    private List<UserResponse> processResultSet(ResultSet resultSet) throws SQLException {
        List<UserResponse> users = new ArrayList<>();
        while (resultSet.next()) {
            users.add(new UserResponse(
                resultSet.getString(1),
                resultSet.getString(2),
                resultSet.getString(3),
                Date.valueOf(resultSet.getString(4)),
                resultSet.getString(5),
                resultSet.getString(6))
            );
        }

        return users;
    }
}
