This is a web application built for managing employee records. It allows users to perform operations such as adding, updating, and deleting employee information through a user-friendly interface.

Features:
----------
Add Employee: Add new employees to the system by providing necessary details such as first name, last Name and email.

Update Employee: Update existing employee records to reflect changes in their information.

Delete Employee: Remove employees from the system when they are no longer part of the organization.

Technologies Used:
------------------
Frontend:
.React 
.JavaScript (ES6)
.HTML5
.CSS3
.Bootstrap 

Backend:
.Java 
.Spring Boot 
.Maven 

Database:
.Microsoft SQL Server 


Setup Instructions
------------------
1-Clone the Repository: git clone https://github.com/Mariat2001/Employee-Management.git 

2-Frontend Setup:
                .Navigate to the frontend directory: cd Employee-Management/ems-Frontend  
                .Install dependencies:npm install 
                                      npm install react-bootstrap bootstrap
              
3-Backend Setup:
               .Navigate to the backend directory: cd ../ems-backend
               .Set up your MS SQL Server database and configure the connection details in application.properties->
                      spring.jpa.properties.hibernate.format_sql=true

                      spring.datasource.url= jdbc:sqlserver://localhost:1433;encrypt=true;trustServerCertificate=true;databaseName="Database Name"
                      spring.datasource.username= "Username" 
                      spring.datasource.password= "Password"

                      spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.SQLServerDialect
                      spring.jpa.hibernate.ddl-auto= update

                      server.port ="port number" (optional)

               .Build the backend application:mvn clean install
4-Start the Application:
               .Start the backend server:mvn spring-boot:run(you need to install maven)
               .Start the frontend development server:npm run dev




