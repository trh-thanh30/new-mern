const express = require("express");
const {
  createEmployment,
  getAllEmployment,
} = require("../controller/employ.controller");
const cloudinaryFileUploader = require("../middlewares/FileUploader");
const router = express.Router();

router.post("/", cloudinaryFileUploader.single('profileImage') , createEmployment);
router.get("/", getAllEmployment);
module.exports = router;
