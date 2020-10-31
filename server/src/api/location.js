const { Router } = require("express");

const router = Router();
require("dotenv").config({ path: __dirname + "/.env" });

router.get("/:ipAddr", (req, res) => {
  const ipAddr = req.params.ipAddr;
  const url = `${process.env.WEATHER_API}locations/v1/cities/ipaddress?apikey=${process.env.ACCUWEATHER_API_KEY}&q=${ipAddr}`;

  let location;
  console.log(url);
  fetch(url)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log("data from fetch:", data);
    })
    .catch((error) => {
      require.json({
        message: error.message,
        stack:
          process.env.NODE_ENV === "production"
            ? "Server has crashed!"
            : error.stack,
      });
    });
});

module.exports = router;
