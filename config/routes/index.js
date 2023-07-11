const router = require("express").Router();
const auth = require("./auth");
const loc = require("./loc")
const map = require("./map")
// API
router.use("/api/auth/", auth);
router.use("/api/location", loc)
router.use("/api/mapping", map)

module.exports = router;
