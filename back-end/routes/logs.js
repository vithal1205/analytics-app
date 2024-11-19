const express = require("express");
const Log = require("../models/Logs");
const router = express.Router();

// Endpoint to log chart data access
router.post("/", async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Fetch logs sorted by access_time
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find().sort({ access_time: 1 });
    res.json(logs);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
