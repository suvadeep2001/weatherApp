const axios = require("axios");
const API_KEY = "61d5d9cbe27f7c52ebaa88cf8dde4cdb";
const url = `api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;
exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};

exports.getWeather = (req, res) => {
  const city = req.body.city;

};
