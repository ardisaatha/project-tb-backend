const router = require("express").Router()
const map = require("../../app/controllers/mapController")
const Authentication = require("../../middlewares/authenticate")

router.get("/", map.mapping)
router.get("/faskes",Authentication, map.mappingFaskes)
router.get("/:id", map.mapId)

module.exports = router