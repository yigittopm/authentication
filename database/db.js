const mongoose = require("mongoose");

const connection = () => {
    mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true})
        .then(() => console.log("Succcessful connect database.."))
        .catch(err => console.log(err));
}

module.exports = connection;