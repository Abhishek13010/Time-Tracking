const bcrypt=require("bcrypt")
const { is } = require("express/lib/request")
const UserModel = require("../model/user-model")


module.exports.addUser = function (req, res) {
    //db insert user
    
    let firstName = req.body.firstName
    let email = req.body.email
    let password = req.body.password

    //encryption
    let encPassword = bcrypt.hashSync(password,10)

    let role = req.body.role


    let user = new UserModel({
        firstName: firstName,
        email: email,
        password: encPassword,        
        role: role
    })


    user.save(function (err, success) {
        if (err) {
            console.log(err);
            //sendMailToDev(err);
            res.json({ msg: "Something Went to Wrong !!!", status: -1, data: req.body })

        } else {
            res.json({ msg: "user added", status: 200, data: success })
        }
    })
}


module.exports.getAllUsers = function(req,res){
    //role -> db --> select * from roles 
    //model 
    //REST 
    UserModel.find().populate("role").exec(function(err,users){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"Users...",status:200,data:users})

        }
    })
}


// module.exports.deleteUser=function(req,res){
//     let userId = req.params.userId
//     UserModel.deleteOne({_id=userId},function(err,data){
//         if(err){
//             res.json({msg:"Something went to wrong!!",data:err, status:-1})
//         }
//         else{
//             res.json({msg:"user removed..",data:data,status:200})
//         }
//     })
// }

module.exports.deleteUser = function(req,res){
    //params userid 
    let userId = req.params.userId //postman -> userid 

    UserModel.deleteOne({_id:userId},function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "user removed...", data: data, status: 200 })//http status code 
        }
    })
}


//login


module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })//http status code 
        }
    })

}
  







// module.exports.login = function(req,res){
//     let param_email = req.body.email
//     let param_password = req.body.password

//     let isCorrect = false
//     UserModel.findOne({email:param_email},function(err,data){
//         if(data){
//             let ans = bcrypt.compareSync(param_password,data.password)
//             if(ans==true){
//                 isCorrect = ture
//             }
//         }
//         if(isCorrect == false){
//             res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })
//         }else{
//             res.json({ msg: "Login....", data: data, status: 200 })
//         }

//     })
   
// }
