File Upload API using Spring Boot.

Build and run

Configurations

Open the application.properties, config.properties file and set your own configurations.

Technology Stack

Java 8
Maven > 3.0
Spring Boot 1.5.8.RELEASE

Using the CLI

Go on the project's root folder, then type:

$ mvn spring-boot:run

From Eclipse (Spring Tool Suite)

Import as Existing Maven Project and run it as Spring Boot App.

How to Use

Launch the application and go on http://localhost:8081/
Click the Browse... button and choose a file to upload (of size less than in your application.properties)
Go in the directory you have set in the config.properties file: the uploaded file will be copied here.
