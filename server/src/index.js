const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");

const middlewares = require("./middlewares");
const weather = require("./api/weather");
const location = require("./api/location");
const app = express();
dotenv.config({ path: __dirname + "/.env" });
app.use(morgan("common"));

app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log(`${process.env.NODE_ENV} is being called`);
  res.json({
    message: "Hello World",
  });
});

app.use("/api/weather", weather);
app.use("/api/location", location);

// eslint-disable-next-line no-unused-vars

app.use(middlewares.notFound);

app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
