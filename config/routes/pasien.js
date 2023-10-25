const router = require("express").Router()
const pas = require("../../app/controllers/pasienController")
const Authentication = require("../../middlewares/authenticate")

router.get("/filter",Authentication, pas.filterPasien)
router.get("/", pas.getAllPasien)
router.get("/:id",Authentication, pas.getPasienById)
router.get("/kel/:id",Authentication, pas.getPasienByIdKel)

module.exports = router