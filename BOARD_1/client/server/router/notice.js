const express = require("express");
const Notice = require("../schemas/notice");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const notice = await Notice.find({});
  res.json(notice);
});

module.exports = router;
