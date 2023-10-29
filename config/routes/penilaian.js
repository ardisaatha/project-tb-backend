const router = require("express").Router();
const penilaian = require("../../app/controllers/penilaianController");
const upload  = require('../../utils/upload');
// const Authentication = require("../../middlewares/authenticate");
// const isAdmin = require("../../middlewares/isAdmin");

// API
router.post("/create", penilaian.createNilai);
router.post('/upload', upload.single('file'), penilaian.uploadAndConvertToJSON);
// router.get("/getUser", penilaian.getAllUser);
// router.get("/getUser/:id", penilaian.getUserById);
// router.put("/updateAcc/:id", penilaian.updateUser);
// router.delete("/deleteAcc/:id", penilaian.deleteUser);

module.exports = router;