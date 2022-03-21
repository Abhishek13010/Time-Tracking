const ProjectModel = require("../model/project-model")

module.exports.addProject = function (req, res) {
    let projectTitle = req.body.projectTitle
    let description = req.body.description
    let technology = req.body.technology
    let startDate = req.body.startDate
    let complitionDate = req.body.complitionDate
    let estimatedHours = req.body.estimatedHours


    let project = new ProjectModel({
        projectTitle: projectTitle,
        description: description,
        technology: technology,
        estimatedHours :estimatedHours,
        startDate :startDate,
        complitionDate :complitionDate
    })


    project.save(function (err, success) {
        if (err) {
            console.log(err);
            //sendMailToDev(err);
            res.json({ msg: "Something Went to Wrong !!!", status: -1, data: req.body })

        } else {
            res.json({ msg: "project added", status: 200, data: success })
        }
    })
}



module.exports.getAllProjects = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    ProjectModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Get all Project...",status:200,data:data})

        }
    })
}


module.exports.deleteProject = function(req,res){
    //params userid 
    let projectId = req.params.projectId //postman -> projectid 

    ProjectModel.deleteOne({_id:projectId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Project removed...", data: data, status: 200 })//http status code 
        }
    })
}



module.exports.updateProject = function(req,res){

    //update role set roleName = admin where roleId = 12121 
    let projectId = req.body.projectId 
    let projectTitle = req.body.projectTitle
    let description = req.body.description
    let technology = req.body.technology 

    ProjectModel.updateOne({_id:projectId},{projectTitle : projectTitle},{description :description},{technology : technology},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}


