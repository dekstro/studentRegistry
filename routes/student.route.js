const student_controller=require("../controllers/student.controller")

// route for CRUD operations
module.exports=(app)=>{
    //GET 127.0.0.1:8080/StudentRegistry/api/v1/students
    app.get("/StudentRegistry/api/v1/students",student_controller.getStudentDetails)
}