package otus.sn.api.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix="user.default")
public record DefaultUserData(String password) {
    
}
