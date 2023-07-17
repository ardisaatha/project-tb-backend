const router = require("express").Router();
const auth = require("../../app/controllers/authController");
// API
router.post("/login", auth.login);
router.get("/getUser", auth.getAllUser);

module.exports = router;
