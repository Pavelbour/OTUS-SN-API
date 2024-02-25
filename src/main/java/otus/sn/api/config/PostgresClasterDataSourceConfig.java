package otus.sn.api.config;

import java.util.HashMap;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.zaxxer.hikari.HikariDataSource;

import otus.sn.api.services.DataLoadingService;

@Configuration(proxyBeanMethods = false )
public class PostgresClasterDataSourceConfig {
    
    @Bean()
    @Primary
    @Qualifier("readWriteDataSource")
    @ConfigurationProperties("spring.datasource.readwrite")
    public HikariDataSource readWriteDataSource() {
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }

    @Bean()
    @Qualifier("read1DataSource")
    @ConfigurationProperties("spring.datasource.readonly1")
    public HikariDataSource read1DataSource() {
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }

    @Bean()
    @Qualifier("read2DataSource")
    @ConfigurationProperties("spring.datasource.readonly2")
    public HikariDataSource read2DataSource() {
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }

    @Bean
    Map<Integer, DataSource> getDatasourcePool(
        @Qualifier("readWriteDataSource") HikariDataSource readWriteDataSource,
        @Qualifier("read1DataSource") HikariDataSource read1DataSource,
        @Qualifier("read2DataSource") HikariDataSource read2DataSource
        ) {
        Map<Integer, DataSource> pool = new HashMap<>();
        pool.put(0, readWriteDataSource);
        pool.put(1, read1DataSource);
        pool.put(2, read2DataSource);
        return pool;
    }

    @Bean
    CommandLineRunner initDatabase(DataLoadingService dataGenerator) {
        return args -> {
            dataGenerator.loadData();
        };
    }
}
