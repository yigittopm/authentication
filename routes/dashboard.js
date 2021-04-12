const router = require("express").Router();
const dashboardController = require("../controllers/dashboard");

router.get("/", dashboardController.getProfile);

module.exports = router;