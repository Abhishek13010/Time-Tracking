const mongoose = require("mongoose")


//schema 
const StatusSchema = new mongoose.Schema({
    statusName:{
        type:String
        //require:true
    }
    // role:{
    //     type:mongoose.Schema.Types.ObjectId
    //     ,ref:"role"

    // }
})

//model 
const StatusModel = mongoose.model("status",StatusSchema) //user 

module.exports = StatusModel 