const { member, Member} = require('../../models');
const { get } = require('../../controllers/api/member-routes');
var weatherContainerEl = document.querySelector("#weather-container");
const zipCode = member.zipcode;

getToday(zipCode);

function getToday(zipCode) {
    var weather = "https://api.openweathermap.org/data/2.5/weather?q=" + zipCode + "&appid=fe8d611a841b4f7219380686ae60e97a&units=imperial";

    fetch(weather)
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        else {
            alert ("Error: " + response.status);
        }
    })
    .catch(function(error) {
        alert("Unable to connect to OpenWeather");
    })
    .then(function(data) {
        
        weatherContainerEl.textContent = "";

        
        var zipCodeEl = document.createElement("h3")
        zipCodeEl.classList.add("card-title");
        zipCodeEl.textContent = data.name + " (" + new Date().toLocaleDateString() + ")";
        var sectionEl = document.createElement("div");
        sectionEl.classList.add("card");
        var windEl = document.createElement("p");
        windEl.classList.add("card-text");
        var humidEl = document.createElement("p");
        humidEl.classList.add("card-text");
        var tempEl = document.createElement("p");
        tempEl.classList.add("card-text");
        humidEl.textContent = "Humidity: " + data.main.humidity + " %";
        tempEl.textContent = "Temperature: " + data.main.temp + " °F";
        var dataEl = document.createElement("div");
        dataEl.classList.add("card-body");
        var iconEl = document.createElement("img");
        iconEl.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

        
        zipCodeEl.appendChild(iconEl)
        dataEl.appendChild(zipCodeEl);
        dataEl.appendChild(tempEl);
        dataEl.appendChild(humidEl);
        dataEl.appendChild(windEl);
        sectionEl.appendChild(dataEl);
        weatherContainerEl.appendChild(sectionEl);
        })
}