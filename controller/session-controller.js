const fs = require("fs")

function login(req,res)
{
    let loginHtml = fs.readFileSync("./controller/views/login.html")
    res.write(loginHtml)
    res.end()
}

function signup(req,res)
{
    let signupHtml = fs.readFileSync("./controller/views/signup.html")
    res.write(signupHtml)
    res.end()
}

function saveuser(req,res){
    console.log(req.body)
    res.write("Data Save")
    res.end()
}
module.exports.login = login
module.exports.signup = signup 
module.exports.saveuser = saveuser