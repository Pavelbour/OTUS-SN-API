// package otus.sn.api.config;

// import javax.sql.DataSource;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.context.annotation.Profile;
// import org.springframework.core.io.ClassPathResource;
// import org.springframework.data.jdbc.repository.config.AbstractJdbcConfiguration;
// import org.springframework.jdbc.datasource.init.DataSourceInitializer;
// import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

// @Configuration
// @Profile("test")
// public class TestJdbcConfiguration extends AbstractJdbcConfiguration {

//     @Bean
//     DataSourceInitializer initializer(DataSource dataSource) {
//         var initializer = new DataSourceInitializer();
//         initializer.setDataSource(dataSource);

//         var script = new ClassPathResource("test-schema.sql");
//         var populator = new ResourceDatabasePopulator(script);
//         initializer.setDatabasePopulator(populator);

//         return initializer;
//     }
// }
