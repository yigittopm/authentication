const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

const loginUser = async (req, res, next) => {
    const {email, password} = req.body;
    
    if(!email || !password){
        return next(new ErrorResponse("Please provide an email and password", 400));
    }

    try {
        const user = await User.findOne({email}).select("+password");

        if(!user){
            return next(new ErrorResponse("Invalid email", 401));
        }

        const isMatch = await user.matchPassword(password);

        if(!isMatch){
            return next(new ErrorResponse("Invalid credentials", 401));
        }
        console.log("Login")
        sendToken(user, 200, res);

    } catch (error) {
        next(error);
    }
    
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({success: true, token})
}

module.exports = {
    loginUser
}