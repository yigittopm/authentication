const router = require("express").Router();

const loginRoutes = require("./login");
const registerRoutes = require("./register");
const dashboardRoutes = require("./dashboard");

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;