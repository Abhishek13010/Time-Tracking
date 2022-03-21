const mongoose = require("mongoose")


let UserTaskSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    task:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }
})

const UserTaskModel = mongoose.model("usertask",UserTaskSchema)
module.exports = UserTaskModel