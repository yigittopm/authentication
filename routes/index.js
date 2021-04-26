const router = require("express").Router();

const loginRoutes = require("./login");
const registerRoutes = require("./register");
const privateRoutes = require("./private");

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/private", privateRoutes);

module.exports = router;