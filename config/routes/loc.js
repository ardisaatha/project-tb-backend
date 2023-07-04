const router = require("express").Router()
const loc = require("../../app/controllers/locController")
const Authentication = require("../../middlewares/authenticate")

router.get("/", Authentication, loc.getAllLocation)
router.get("/:id", Authentication, loc.getLocationById)

module.exports = router