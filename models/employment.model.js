const mongoose = require("mongoose");
const employmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    salary: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Employment = mongoose.model("Employment", employmentSchema);
module.exports = Employment;
