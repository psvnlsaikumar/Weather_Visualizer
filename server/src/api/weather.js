const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    message: "",
  });
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      message: "",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
