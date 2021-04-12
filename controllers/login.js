const User = require("../models/User");

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username, password});

    if(user){
        res.status(200).redirect("/dashboard");
        // Profile yönlendir
    }else{
        res.status(401).redirect("/login");
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