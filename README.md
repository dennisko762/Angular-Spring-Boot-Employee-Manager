# Angular-Spring-Boot-Employee-Manager

## What is this project good for?
The project is a simple employee managing app that I did in order to practise my skills with Spring Boot in connection with a frontend framework such as Angular.
The project is not meant to be super extraordinary and have fancy features but rather cover the fundamentals of full-stack web development.
I also use this project to refresh some basic Java skills since I have been primarily using JavaScript/TypeScript for privat projects as well as professionally.

## What can I do in this project?
At the moment the app covers basic CRUD operations on entities, in this case employees, that someone that runs some kind of administrative tool might use.
These include adding, editing and removing employees.
Employeed have attributes such as name, email, phone or job title. 

## Outlook
I will extend this application in the future and add more and more features to it, add an api to it or who knows. At the moment its more a playground to discover and practise
new features. 
In the near future I will definitely include Spring Security in my application and build some kind of authentication mechanism.

## How to run

### Start the application
Clone this repo by running "git clone https://github.com/dennisko762/Angular-Spring-Boot-Employee-Manager.git".
Start the Spring Boot application by executing the "EntityManagerApplication.java" file.
Start the Angular App by running "ng serve" within the angular subdirectory.

### Create the h2 database
The project uses the h2 database which has a console that is available at "http://localhost:8080/h2-ui".
You can either create a database file and point at it, or use the in memory database.
When choosing the first option, a file should be created for you automatically, if not, just create a file called <name>.mv.db anywhere and enter the path.
If you press connect it should say "connected" and redirect you do the database interface where you see your table with the respective columns.

