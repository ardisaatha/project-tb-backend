const router = require("express").Router();
const auth = require("../../app/controllers/authController");
// API
router.post("/login", auth.login);
router.post("/login/admin", auth.loginAdmin);

module.exports = router;
