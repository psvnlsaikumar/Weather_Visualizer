const { Router } = require("express");
const { default: fetch } = require("node-fetch");
require("dotenv").config({ path: __dirname + "/.env" });

const router = Router();

router.get("/by_city/", (req, res) => {
  let city = req.body.city;
  console.log(`${city}city`);
  const url = `${process.env.WEATHER_API}weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((response) => res.send(response))
    .catch((err) => {
      return new Error(err);
    });
});

router.get("/by_lat_lon/", (req, res) => {
  let lat = req.body.lat;
  let lon = req.body.lon;
  const url = `${process.env.WEATHER_API}weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`;
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((response) => res.send(response))
    .catch((err) => {
      return new Error(err);
    });
});

module.exports = router;
