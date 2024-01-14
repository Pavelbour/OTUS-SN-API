FROM amazoncorretto:21.0.1 AS build
WORKDIR /var/app
COPY . .
RUN ./gradlew bootJar

FROM amazoncorretto:21-alpine3.18
WORKDIR /var/app
COPY --from=build /var/app/build/libs/app-0.0.1-SNAPSHOT.jar app.jar
CMD [ "java", "-jar", "app.jar" ]
