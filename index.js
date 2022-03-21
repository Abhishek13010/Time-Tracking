const express = require("express")
const mongoose = require("mongoose")
const sessionController = require("./controller/session-controller")
const roleController=require("./controller/role-controller")
const userController=require("./controller/user-controller")
const projectController=require("./controller/project-controller")
const projectTeamController=require("./controller/project-team-controller")
const statusController=require("./controller/status-controller")
const moduleController=require("./controller/module-controller")
const taskController=require("./controller/task-controller")
const userTaskController=require("./controller/user-task-controller")
//const  Mongoose = require("mongoose")
const app=express()

var cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))


//database
mongoose.connect('mongodb://localhost:27017/eCom',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})



app.get('/',function(req,res){
    res.write("Hello")
    res.end()
})

app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveuser",sessionController.saveuser)

//Role

app.post("/role",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//Users

app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.post("/login",userController.login)

//Project
app.post("/projects",projectController.addProject)
app.get("/projects",projectController.getAllProjects)
app.delete("/projects/:projectId",projectController.deleteProject)
app.put("/projects",projectController.updateProject)

//Project Team

app.post("/project-team",projectTeamController.addProjectTeam)
app.get("/project-team",projectTeamController.getAllProjectTeams)

//Status

app.post("/status",statusController.addStatus)
app.get("/status",statusController.getAllStatus)

//Module

app.post("/module",moduleController.addModule)
app.get("/module",moduleController.getAllModule)

//task

app.post("/task",taskController.addTask)
app.get("/task",taskController.getAllTask)

//user-task

app.post("/userTask",userTaskController.addUserTask)
app.get("/userTask",userTaskController.getAllUsertask)

app.listen(4000,function(){
    console.log("Server 4000");
})


//git init
//git add - all
//git commit -m "Updated.."
//git push origin master