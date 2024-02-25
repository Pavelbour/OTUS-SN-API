package otus.sn.api.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix="spring.datasource.readwrite")
public record ConnectionData(
    String url,
    String username,
    String password,
    String driverClassName
) {

}
