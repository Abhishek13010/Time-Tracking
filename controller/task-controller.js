const TaskModel = require("../model/task-model")


//add[post]
module.exports.addTask=function(req,res){

    let module =req.body.module
    let project =req.body.project
    let title = req.body.title
    let discription = req.body.discription
    let priority=req.body.priority
    let status = req.body.status
    let totalminutes = req.body.totalminutes


    let task = new TaskModel({
        module:module,
        project:project,
        title:title,
        discription:discription,
        priority:priority,
        status:status,
        totalminutes:totalminutes
    })

    task.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"add task",status:200,data:data})
        }
    })
}

//list

module.exports.getAllTask = function(req,res){
     
    TaskModel.find().populate("module").populate("project").populate("status").exec(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"task ret...",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteTask = function(req,res){
    let taskId = req.params.taskId

    TaskModel.deleteOne({_id:taskId},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"task remove",status:200,data:data})
        }
    })
}

//update

module.exports.updateTask = function(req,res){

    let taskId = req.body.taskId
    let module = req.body.module
    let project = req.body.project
    let title = req.body.title
    let discription = req.body.discription
    let priority=req.body.priority
    let status=req.body.status
    let totalminutes = req.body.status

    TaskModel.updateOne({_id:taskId},{module:module,project:project,title:title,discription:discription,priority:priority,status:status,totalminutes:totalminutes},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
