const axios = require("axios");
const API_KEY = "61d5d9cbe27f7c52ebaa88cf8dde4cdb";
exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};

exports.getWeather = (req, res) => {
  const city = req.body.city;

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

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
};
