const router = require("express").Router();
const auth = require("./auth");
const loc = require("./loc")
const map = require("./map")
const pas = require("./pasien")
const admin = require("./admin")
// API
router.use("/api/auth/", auth);
router.use("/api/location", loc)
router.use("/api/mapping", map)
router.use("/api/pasien", pas)
router.use("/api/admin", admin)

module.exports = router;
