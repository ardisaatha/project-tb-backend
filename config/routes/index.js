const router = require("express").Router();
const auth = require("./auth");
// API
router.use("/api/auth/", auth);

module.exports = router;
