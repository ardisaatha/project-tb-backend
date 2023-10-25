const router = require("express").Router();
const docs = require("./docs");
const auth = require("./auth");
const map = require("./map")
const loc = require ("./loc")
const pas = require("./pasien")
const admin = require("./admin")
const faskes = require("./faskes")
const nilai = require("./penilaian")
// API
router.use("/api-docs", docs);
router.use("/api/auth/", auth);
router.use("/api/kelurahan", loc)
router.use("/api/mapping", map)
router.use("/api/pasien", pas)
router.use("/api/admin", admin)
router.use("/api/faskes", faskes)
router.use("/api/nilai", nilai)

module.exports = router;
