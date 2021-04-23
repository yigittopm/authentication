const User = require("../models/User");
const path = require("path");

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username, password});

    if(user){
        res.status(200).send("OK")
        // Profile yönlendir
    }else{
        res.status(401)
        res.sendFile(path.join(__dirname,  "../" + "./client" + "/src" + "/components" + "/pages"+ "/LoginPage.jsx"))
        // Login sayfasında kal
    }
}

const getLogin = (req,res) => {
    res.send("GET LOGIN")
}

module.exports = {
    loginUser,
    getLogin
}