const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/chart", require("./routes/chart"));
app.use("/api/logs", require("./routes/logs"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
