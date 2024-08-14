const express = require("express");
const {
  createEmployment,
  getAllEmployment,
  getEmploymentById,
} = require("../controller/employ.controller");
const cloudinaryFileUploader = require("../middlewares/FileUploader");
const router = express.Router();

router.post(
  "/",
  cloudinaryFileUploader.single("profileImage"),
  createEmployment
);
router.get("/", getAllEmployment);
router.get("/:id", getEmploymentById);
module.exports = router;
