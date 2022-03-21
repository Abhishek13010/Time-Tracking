const mongoose = require("mongoose")

let ProjectTeamSchema = new mongoose.Schema({
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref :"project"
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"user"
    }
})

const ProjectTeamModel = mongoose.model("projectTeam",ProjectTeamSchema)
module.exports=ProjectTeamModel

