const router = require("express").Router();
const docs = require("./docs");
const auth = require("./auth");
const map = require("./map")
const pas = require("./pasien")
const admin = require("./admin")
// API
router.use("/api-docs", docs);
router.use("/api/auth/", auth);
router.use("/api/mapping", map)
router.use("/api/pasien", pas)
router.use("/api/admin", admin)

module.exports = router;
