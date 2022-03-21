const mongoose = require("mongoose")


//schema 
const ModuleSchema = new mongoose.Schema({
    moduleName:{
        type:String
        //require:true
    },
    description:{
        type:String

    },
    
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"project"

    }
})

//model 
const ModuleModel = mongoose.model("module",ModuleSchema) //module

module.exports = ModuleModel 