const axios = require("axios");

// const api_key = process.env.API_KEY;

const Weather = require("../model/weather");
require("dotenv").config();

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};

exports.getWeather = (req, res) => {
  const city = req.body.city;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;

  const weather = new Weather(req.body.city);

  weather.validateUserInput();

  if (weather.errors.length) {
    res.render("index", {
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        res.render("index", {
          weather: `It is currently ${response.data.main.temp} in ${response.data.name}.`,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
