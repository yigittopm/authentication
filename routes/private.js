const router = require("express").Router();
const privateController = require("../controllers/private");
const { protect } = require("../middleware/auth");

router.get("/", protect, privateController.getPrivateRoute);

module.exports = router;