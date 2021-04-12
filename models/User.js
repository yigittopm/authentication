const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        trim: true,
        min: (6)
    },
    email : {
        type: String,
        required: true,
        trim: true,
        min: (6)
    },
    password : {
        type: String,
        required: true,
        trim: true,
        min: (6)
    },
    date : {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("User", userSchema);