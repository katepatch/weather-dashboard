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

var getCityWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + key;

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                displayCityWeather(data, city);
            });
        } else {
            alert("error:" + response.statusText);
        }
    })

    .catch(function(error) {
        alert("Can't connect to Open Weather");
    })
};

var searchCityUv = function(lon, lat, city) {
    var uvUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key + "&lat=" + lat + "&lon=" + lon;

    fetch(uvUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(lon, lat, city) {
                displayCurrentUv(lon, lat, city);
            });
        } else {
            alert("Error" + response.statusText);
        }
    })

    .catch(function(error) {
        alert("Can't connect to Open Weather");
    })
};

var cityWeather = function(city, searchInput) {

    cityContainerEl.textContent = '';
    citySearch.textContent = searchInput;

    var displayCurrentDate = document.querySelector("#city-current-date");
    var currentDate = moment();
    displayCurrentDate.textContent = currentDate.format("(L)");

    var displayIcon = document.querySelector("#city-icon");
    var currentIcon = "https://openweathermap.org/img/wn/" + city.weather[0].icon + "@2x.png"
    displayIcon.setAttribute ("src", currentIcon);

    var displayTemp = document.querySelector("#temp-input")
    var currentTemp = Math.round(city.main.temp) + " °F";
    displayTemp.textContent = currentTemp;

    var displayHumidity = document.querySelector("#humidity-input");
    var currentHumidity = city.main.humidity + "%";
    displayHumidity.textContent = currentHumidity;
    
    
}
