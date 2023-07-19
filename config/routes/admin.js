const router = require("express").Router();
const admin = require("../../app/controllers/adminController");
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");

// API
router.get("/getUser", Authentication, isAdmin, admin.getAllUser);
router.get("/getUser/:id", Authentication, isAdmin, admin.getUserById);
router.post("/createAcc", Authentication, isAdmin, admin.createUser);
router.put("/updateAcc/:id", Authentication, isAdmin, admin.updateUser);
router.delete("/deleteAcc/:id", Authentication, isAdmin, admin.deleteUser);

module.exports = router;
