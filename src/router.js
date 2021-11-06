const express = require("express");

const router = express.Router();

const controller = require("./controllers/controller");

router.get("/", controller.renderHomePage);

router.get("/about", controller.renderAboutPage);

router.post("/", controller.getWeather);

module.exports = router;
