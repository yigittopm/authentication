const User = require("../models/User");

const getProfile = async (req,res) => {
    res.send("DASHBOARD")
}

module.exports = {
    getProfile
}