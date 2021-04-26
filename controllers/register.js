const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

//
const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ success: true, token});
}

const createUser = async (req, res, next) => {
    const { username, email, password } = req.body;
    
    try {
        const user = await User.create({
            username, email, password
        })
        
        sendToken(user, 200, res);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser
}