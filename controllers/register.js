const User = require("../models/User");

const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    const user = await User.create({
        username,
        email,
        password
    })
        .then(result => res.redirect("/login").status(200))
        .catch(err => res.send(err).status(404));
    
}

const getRegister = async (req,res) => {
    const users = await User.find()
        .then(result => res.send(result).status(200))
        .catch(err => res.send(err).status(404));
    res.send(users)
}

module.exports = {
    createUser,
    getRegister
}