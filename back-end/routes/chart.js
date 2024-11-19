const express = require("express");
const ChartData = require("../models/ChartData");
const router = express.Router();

// Endpoint to fetch chart data
router.get("/", async (req, res) => {
  const { startDate, endDate, algo_status } = req.query;
  const filter = {};
  if (startDate && endDate) {
    filter.createdAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
  }
  if (algo_status) {
    filter.algo_status = algo_status;
  }

  try {
    const data = await ChartData.find(filter);
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
