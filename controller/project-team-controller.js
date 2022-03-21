const ProjectTeamModel = require("../model/project-team-model")

module.exports.addProjectTeam = function(req,res){
    let project = req.body.project
    let user = req.body.user

    let ProjectTeam = new ProjectTeamModel({
        project : project,
        user : user
    })

    ProjectTeam.save(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"Add ProjectTeam",status:200,data:data})
        }
    })
}

module.exports.getAllProjectTeams = function(req,res){
     
    ProjectTeamModel.find().populate("project").populate("user").exec(function(err,data){
        if(err){
            res.json({msg:"smw",status:-1,data:err})
        }else{
            res.json({msg:"ProjectTeams ret...",status:200,data:data})
        }
    })
}