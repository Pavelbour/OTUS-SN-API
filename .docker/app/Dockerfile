FROM amazoncorretto:21.0.2 AS build
RUN yum update -y && yum install -y unzip openssl \
    && mkdir /opt/gradle \
    && curl -OL https://services.gradle.org/distributions/gradle-8.6-bin.zip \
    && unzip gradle-8.6-bin.zip -d /opt/gradle \
    && rm gradle-8.6-bin.zip
WORKDIR /var/app
COPY . .
RUN mkdir /var/app/src/main/resources/certs
WORKDIR /var/app/src/main/resources/certs
RUN openssl genrsa -out keypair.pem 2048 \
    && openssl rsa -in keypair.pem -pubout -out public.pem \
    && openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in keypair.pem -out private.pem \
    && rm keypair.pem
WORKDIR /var/app
RUN /opt/gradle/gradle-8.6/bin/gradle bootJar

FROM amazoncorretto:21.0.2-alpine3.19
WORKDIR /var/app
COPY --from=build /var/app/build/libs/api-0.1.1-SNAPSHOT.jar app.jar
CMD [ "java", "-jar", "app.jar" ]
