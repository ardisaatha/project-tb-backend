const router = require("express").Router();
const auth = require("./auth");
const loc = require("./loc")
const map = require("./map")
const pas = require("./pasien")
// API
router.use("/api/auth/", auth);
router.use("/api/location", loc)
router.use("/api/mapping", map)
router.use("/api/pasien", pas)

module.exports = router;
