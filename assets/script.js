var key = "e80217a1cf7cb51e1ea4c8feb6a8b97c";

var userFormEl = document.querySelector("#user-form");
var cityInputEl = document.querySelector("#city-name");
var cityContainerEl = document.querySelector("#city-container");
var citySearch = document.querySelector("#city-search");
var currentWeather = document.querySelector("#current-weather");
var previousCityEl = document.querySelector("#search-container");
var fiveDayEl = document.querySelector("#forecast-cards");
var currentUvEl = document.querySelector("#uv-input");

var cityArray = [];

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCityWeather(city);
        getForecast(city);

        cityArray.push(city);
        localStorage.setItem("city", JSON.stringify(cityArray));

        cityInputEl.value = "";
    } else {
        alert("Please enter city name");
    }
};

var clickHandler = function (event) {
    
    var clickCity = event.currentTarget.textContent;

    getCityWeather(clickCity);
    getForecast(clickCity);
};

