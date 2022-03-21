const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    projectTitle :{
        type : String
    },

    description :{
        type : String
    },
    technology :{
        type : String
    },
    estimatedHours :{
        type : Number
    },
    startDate :{
        type : Date
    },
    complitionDate :{
        type :Date
    }
    
})

const ProjectModel = mongoose.model("project",ProjectSchema)
module.exports=ProjectModel