# Student-App
Basic CRUD App for student management. <br>
Backend: Spring Boot <br>
Frontend: ReactJS

## Installation
### Backend
Requirements: Java and Maven installed
```
cd student
mvn spring-boot:run
```
REST API: <br>
GET: http://localhost:8080/students <br>
GET: http://localhost:8080/students/{id} <br>
POST: http://localhost:8080/students <br>
PUT: http://localhost:8080/students/{id} <br>
DELETE: http://localhost:8080/students/{id} <br>

### Frontend
Requirements: NodeJS installed
```
cd frontend
npm install
npm start
```
Opens in http://localhost:3000/
## Screenshots
List of all students:
![StudentList](https://github.com/iisihe/Student-App/blob/master/images/StudentList.png)
Add student:
![AddStudent](https://github.com/iisihe/Student-App/blob/master/images/AddStudent.png)
