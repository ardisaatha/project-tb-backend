const router = require("express").Router()
const loc = require("../../app/controllers/locController")

router.get("/", loc.getAllLocation)
router.get("/:id", loc.getLocationById)

module.exports = router