const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

const protect = async (req, res, next) => {

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split("")[1];
    }

    if(!token){
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne(decoded.id);
        
        if(!user){
            return next(new ErrorResponse("No user found find with is id", 404));
        }
        req.user = user;
        next();

    } catch (error) {
        return next(new ErrorResponse("Not authorized to access this router", 401));
    }
}

module.exports = {
    protect
}