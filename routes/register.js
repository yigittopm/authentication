const router = require("express").Router();
const registerController = require("../controllers/register");

router.get("/", registerController.getRegister);

router.post("/", registerController.createUser);

module.exports = router;