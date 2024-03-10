const students=require("../models/student.model")
let id=4

// Fetch all student details
// GET 127.0.0.1:8080/StudentRegistry/api/v1/students
exports.getStudentDetails=(req,res)=>{
    res.status(200).send(students)
}