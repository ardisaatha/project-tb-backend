const router = require("express").Router()
const pas = require("../../app/controllers/pasienController")
// const Authentication = require("../../middlewares/authenticate")

router.get("/", pas.getAllPasien)
router.get("/:id", pas.getPasienById)
router.get("/kel/:id", pas.getPasienByIdKel)

module.exports = router