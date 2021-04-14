const User = require("../models/User");

const getProfile = async (req,res) => {
    res.sendFile("./client/src/components/pages")
}

module.exports = {
    getProfile
}