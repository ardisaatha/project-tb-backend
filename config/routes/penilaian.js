const router = require("express").Router();
const penilaian = require("../../app/controllers/penilaianController");
const upload  = require('../../utils/upload');
// const Authentication = require("../../middlewares/authenticate");
// const isAdmin = require("../../middlewares/isAdmin");

// API
router.post("/create", penilaian.createNilai);
// router.get("/getUser", penilaian.getAllUser);
router.get("/getNilaiPusk/:id", penilaian.NilaiByIdPusk);
router.put("/update/:id", penilaian.updateNilaiByIdPusk);
// router.put("/updateAcc/:id", penilaian.updateUser);
router.delete("/deleteNilai/:id", penilaian.deleteNilaiPusk);

module.exports = router;