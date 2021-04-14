const User = require("../models/User");

const getProfile = async (req,res) => {
    res.render("dashboard")
    res.send("DASHBOARD")
}

module.exports = {
    getProfile
}