# Demo Neginet

## Get Started
Se necesita Docker, Java 8, NodeJS 14.15 y Angular CLI instalados previamente.
Se va a requerir tener 3 terminales.


1ra terminal - Correr el siguiente comando desde la carpeta root del proyecto:
 * `docker-compose up` --> Para levantar y correr la base de datos
 
2da terminal - Correr los siguientes comandos desde la carpeta root del proyecto:
 * `cd back` --> Para dirigirnos al proyecto de spring boot 
 * MacOS: `./mvnw spring-boot:run` - Windows: `mvnw spring-boot:run`
 
3ra terminal - Correr los siguientes comandos desde la carpeta root del proyecto:
 * `cd front && npm i` --> Para dirigirnos al proyecto de angular e instalar las dependencias
 * `ng serve` --> Para correr angular
