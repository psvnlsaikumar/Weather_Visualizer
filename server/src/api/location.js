const { Router, response } = require("express");
const { default: fetch } = require("node-fetch");
const router = Router();
require("dotenv").config({ path: __dirname + "/.env" });

router.get("/:ipAddr", (req, res) => {});

module.exports = router;
