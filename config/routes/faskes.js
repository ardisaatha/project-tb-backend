const router = require("express").Router()
const faskes = require("../../app/controllers/faskesController")
const Authentication = require("../../middlewares/authenticate")

router.get("/", Authentication, faskes.getFasyankes)
router.get("/:id", Authentication, faskes.getFasyankesId)

module.exports = router