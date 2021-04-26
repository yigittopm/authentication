const router = require("express").Router();
const loginController = require("../controllers/login");

router.post("/", loginController.loginUser)

module.exports = router;