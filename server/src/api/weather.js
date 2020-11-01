const { Router } = require("express");
const { default: fetch } = require("node-fetch");
require("dotenv").config();

const router = Router();

router.get("/by_city/:city", (req, res) => {
  let city = req.params.city;
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

router.get(
  "/by_city/by_area/:lon_left&:lat_bot&:lon_right&:lat_top&:zoom",
  (req, res) => {
    let lon_left = req.params.lon_left;
    let lat_bot = req.params.lat_bot;
    let lon_right = req.params.lon_right;
    let lat_top = req.params.lat_top;
    let zoom = req.params.zoom;

    const url = `${process.env.WEATHER_API}box/city?bbox=${lon_left},${lat_bot},${lon_right},${lat_top},${zoom}&appid=${process.env.WEATHER_API_KEY}`;
    console.log(url);

    fetch(url)
      .then((response) => response.json())
      .then((response) => res.send(response))
      .catch((err) => {
        return new Error(err);
      });
  }
);

module.exports = router;
