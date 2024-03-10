const express=require('express')
const app=express()
app.use(express.json())
require("./routes/student.route")(app)
app.listen(8080,()=>{
    console.log("App started at port:",8080)
})