package otus.sn.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import otus.sn.api.config.ConnectionData;
import otus.sn.api.config.DefaultUserData;
import otus.sn.api.config.RsaKeyProperties;

@SpringBootApplication
@EnableConfigurationProperties({RsaKeyProperties.class, DefaultUserData.class, ConnectionData.class})
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
