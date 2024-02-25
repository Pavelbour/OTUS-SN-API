package otus.sn.api.data.repositories;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.stereotype.Component;

@Component
public class BaseRepository {
    private final Map<Integer, DataSource> dataSources;
    private static int counter = 1;

    public BaseRepository(Map<Integer, DataSource> dataSources) {
        this.dataSources = dataSources;
    }

    protected <T> List<List<String>> fetchEntity(RequestData requestData) {
        List<List<String>> result = new ArrayList<>();
        try {
            Connection connection = getReadOnlyConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(requestData.queryString());
            preparedStatement = setValues(requestData.data(), preparedStatement);
            ResultSet resultSet = preparedStatement.executeQuery();
            result = processResultSet(resultSet);

            preparedStatement.close();
            connection.close();
        } catch (SQLException exception) {
            System.out.println(exception.getMessage());
        }

        return result;
    }

    protected List<String> updateEntity(RequestData requestData) {
        List<String> keys = new ArrayList<>();
        try {
            Connection connection = getReadWriteConnection();
            PreparedStatement preparedStatement = connection.prepareStatement(requestData.queryString(), Statement.RETURN_GENERATED_KEYS);
            preparedStatement = setValues(requestData.data(), preparedStatement);
            preparedStatement.executeUpdate();
            ResultSet generatedKeys = preparedStatement.getGeneratedKeys();
            while (generatedKeys.next()) {
                keys.add(generatedKeys.getString(1));
            }

            preparedStatement.close();
            connection.close();
        } catch (SQLException exception) {
            System.out.println(exception.getMessage());
        }

        return keys;
    }

    protected <T> List<List<T>> splitInChunks(List<T> users, int chunkSize) {
        List<List<T>> result = new ArrayList<>();

        for (int i = 0; i < users.size(); i += chunkSize) {
            int toIndex = Math.min(i + chunkSize, users.size());
            result.add(users.subList(i, toIndex));
        }

        return result;
    }

    private PreparedStatement setValues(Iterable<Object> values, PreparedStatement preparedStatement) throws SQLException {
        Iterator<Object> iterator = values.iterator();
        int i = 1;
        while (iterator.hasNext()) {
            preparedStatement.setObject(i++, iterator.next());
        }
        return preparedStatement;
    }

    private List<List<String>> processResultSet(ResultSet resultSet) throws SQLException {
        List<List<String>> result = new ArrayList<>();
        int columnCount = resultSet.getMetaData().getColumnCount();

        while (resultSet.next()) {
            List<String> rowData = new ArrayList<>();
            for (int i = 1 ; i <= columnCount; i++) {
                rowData.add(resultSet.getString(i));
            }
            result.add(rowData);
        }

        return result;
    }

    private Connection getReadOnlyConnection() throws SQLException {
        int index = counter++ % dataSources.size();
        return dataSources.get(index).getConnection();
    }

    private Connection getReadWriteConnection() throws SQLException {
        Iterator<DataSource> datasourceIterator = dataSources.values().iterator();
        while (datasourceIterator.hasNext()) {
            try {
                DataSource dataSource = (DataSource) datasourceIterator.next();
                Connection connection = dataSource.getConnection();
                if (connection != null && !connection.getMetaData().isReadOnly()) {
                    return connection;
                }
            } catch (SQLException exception) {
                System.out.println(exception.getMessage());
            }
        }
        throw new SQLException("ReadWrite connection not found");
    }

    public record RequestData(
        String queryString,
        List<Object> data
    ) {
    }
}
