const router = require("express").Router();
const auth = require("./auth");
const loc = require("./loc")
// API
router.use("/api/auth/", auth);
router.use("/api/location", loc)

module.exports = router;
