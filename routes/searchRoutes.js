const express = require("express");
const router = express.Router();

router.get("/:location", (req,res) => {
  res.send(req.params.location)
})



module.exports = router