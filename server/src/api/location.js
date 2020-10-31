const { Router, response } = require("express");
const { default: fetch } = require("node-fetch");
const router = Router();
require("dotenv").config();

router.get("/:ipAddr", (req, res) => {});

module.exports = router;
