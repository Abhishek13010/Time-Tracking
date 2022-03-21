const StatusModel = require("../model/status-model")

module.exports.addStatus = function(req,res){
    let statusName = req.body.statusName
    //let user = req.body.user

    let Status = new StatusModel({
        statusName : statusName
        //user : user
    })

    Status.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"Status",status:200,data:data})
        }
    })
}

module.exports.getAllStatus = function(req,res){
     
    StatusModel.find(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"ProjectTeams ret...",status:200,data:data})
        }
    })
}