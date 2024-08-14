const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const employRouter = require("./routes/employ.route");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/employment", employRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
