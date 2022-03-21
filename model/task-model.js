const mongoose = require("mongoose")


//schema 
const TaskSchema = new mongoose.Schema({
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "task"
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "project"
    },
    title: {
        type: String
    },
    priority: {
        type: String
    },
    discription: {
        type: String
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "status"
    },
    totalminutes: {
        type: Number
    }
})

//model 
const TaskModel = mongoose.model("task",TaskSchema) //module

module.exports = TaskModel 