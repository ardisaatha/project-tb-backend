const router = require("express").Router()
const map = require("../../app/controllers/mapController")
const Authentication = require("../../middlewares/authenticate")

router.get("/",Authentication, map.mapping)
router.get("/:id",Authentication, map.mapId)

module.exports = router