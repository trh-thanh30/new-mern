const Employment = require("../models/employment.model");

const createEmployment = async (req, res) => {
  const { name, email, phone, department, salary } = req.body;
  req.body.profileImage = req.file ? req.file?.path : null;
  if (!name)
    return res
      .status(400)
      .json({ message: "Name is required", success: false });
  if (!email)
    return res
      .status(400)
      .json({ message: "Email address is required", success: false });
  if (!phone)
    return res
      .status(400)
      .json({ message: "Phone number is required", success: false });
  if (!department)
    return res
      .status(400)
      .json({ message: "Department is required", success: false });
  if (!salary)
    return res
      .status(400)
      .json({ message: "Salary is required", success: false });
  const hasEmy = await Employment.findOne({ email });
  if (hasEmy)
    return res
      .status(402)
      .json({ message: "Employment already exists", success: false });
  try {
    const newEmployment = new Employment(req.body);
    await newEmployment.save();
    res.status(201).json({
      message: "Employment created successfully",
      success: true,
      data: newEmployment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const getAllEmployment = async (req, res) => {
  try {
    const allEmployment = await Employment.find();
    res.status(200).json({
      message: "All employment fetched successfully",
      success: true,
      data: allEmployment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const getEmploymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const emp = await Employment.findById(id);
    return res.status(200).json({
      message: "Employment fetched successfully",
      data: emp,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = { createEmployment, getAllEmployment, getEmploymentById };
