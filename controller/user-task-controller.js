const UserTaskModel = require("../model/user-task-model")

//add

module.exports.addUserTask = function(req,res){
    let user = req.body.user
    let task = req.body.task

    let usertask = new UserTaskModel({
        user:user,
        task:task
    })

    usertask.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"add user task",status:200,data:data})
        }
    })
}

//list

module.exports.getAllUsertask = function(req,res){
     
    UserTaskModel.find().populate("user").populate("task").exec(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"User task ret...",status:200,data:data})
        }
    })
}

//delete

module.exports.deleteUsertask = function(req,res){
    let usertaskId = req.params.usertaskId

    UserTaskModel.deleteOne({_id:usertaskId},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"user task remove",status:200,data:data})
        }
    })
}

//update
module.exports.updateUsertask = function(req,res){

    let usertaskId = req.body.usertaskId
    let user = req.body.user
    let task = req.body.task
    

    UserTaskModel.updateOne({_id:usertaskId},{user:user,task:task},function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}