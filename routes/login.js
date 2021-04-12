const router = require("express").Router();
const loginController = require("../controllers/login");

router.get("/", loginController.getLogin);

router.post("/", loginController.loginUser)

module.exports = router;