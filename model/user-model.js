const mongoose = require("mongoose")


//schema 
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String
        //require:true
    },
    email:{
        type:String

    },
    password:{
        type:String
    },
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"user"

    // }
    role:{
        type:mongoose.Schema.Types.ObjectId
        ,ref:"role"

    }
})

//model 
const UserModel = mongoose.model("user",UserSchema) //user 

module.exports = UserModel 