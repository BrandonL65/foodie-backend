const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
require("dotenv").config();


router.get("/:location", async (req,res) => {
  let result = await fetch(`https://api.yelp.com/v3/businesses/search?location=${req.params.location}`, {
    headers: {
      "Authorization": `Bearer ${process.env.API_KEY}`
    }
  })
  let parsedResult = await result.json();
  res.json(parsedResult);
})



module.exports = router