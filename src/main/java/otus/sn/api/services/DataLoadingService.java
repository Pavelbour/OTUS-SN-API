package otus.sn.api.services;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import net.datafaker.Faker;
import otus.sn.api.data.entities.User;

@Service
public class DataLoadingService {

    private final UserService userService;

    public DataLoadingService(UserService userService) {
        this.userService = userService;
    }

    public void loadData() {
        List<User> users = new ArrayList<>();

        try {
            InputStream dataFile = new ClassPathResource("people.csv").getInputStream();
            Scanner dataSource = new Scanner(dataFile);

            String[] rawData;
            String[] userNames;
            Faker faker = new Faker(new Locale("ru"));

            while (dataSource.hasNext()) {
                rawData = dataSource.nextLine().split(",");
                userNames = rawData[0].split(" ");
                users.add(new User(
                        null,
                        userNames[1],
                        userNames[0],
                        Date.valueOf(faker.date().birthday(18, 120, "YYYY-MM-dd")),
                        faker.company().profession(),
                        rawData[2],
                        null));
            }

            dataSource.close();
            dataFile.close();
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        userService.saveAllUsersWithDefaultPassword(users);
    }
}
