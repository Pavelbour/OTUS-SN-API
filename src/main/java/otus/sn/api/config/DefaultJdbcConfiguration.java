package otus.sn.api.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.jdbc.repository.config.AbstractJdbcConfiguration;
import org.springframework.jdbc.datasource.init.DataSourceInitializer;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

import otus.sn.api.services.DataLoadingService;

import javax.sql.DataSource;

@Configuration
@Profile("default")
public class DefaultJdbcConfiguration extends AbstractJdbcConfiguration {

    @Bean
    DataSourceInitializer initializer(DataSource dataSource) {
        var initializer = new DataSourceInitializer();
        initializer.setDataSource(dataSource);

        var script = new ClassPathResource("default-schema.sql");
        var populator = new ResourceDatabasePopulator(script);
        initializer.setDatabasePopulator(populator);

        return initializer;
    }

    @Bean
    CommandLineRunner initDatabase(DataLoadingService dataGenerator) {
        return args -> {
            dataGenerator.loadData();
        };
    }
}
