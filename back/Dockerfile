FROM openjdk:14-jdk-alpine
WORKDIR /back

COPY ./target/demo-0.1.jar ./target/

ENTRYPOINT ["java", "-jar", "/back/target/demo-0.1.jar"]
