const { Router } = require("express");
const { default: fetch } = require("node-fetch");
require("dotenv").config({ path: __dirname + "/.env" });
const router = Router();

router.get("/", (req, res) => {
  let city = "cebu";
  const url = `${process.env.WEATHER_API}weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((response) => res.send(response))
    .catch((err) => {
      return new Error(err);
    });
});

module.exports = router;
