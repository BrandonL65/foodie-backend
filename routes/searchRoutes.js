const express = require("express");
const router = express.Router();

router.get("/:location", (req,res) => {
  res.send(req.params.location)
})

router.get("/test2", (req,res) => {
  res.send("test2 works");
})

module.exports = router