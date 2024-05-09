const weatherAPIKey = "882499a76b7f0c68ee718535237dda81";
const weatherNow = document.getElementById("weather-now");
const weatherContainer = document.getElementById("weather-cards");
const cityWeatherCards = document.getElementById("city-name-card");
const searchForm = document.getElementById("search-form")
const units = "imperial";
let temperatureSymbol = "ºF";

const handleWeatherSearchSubmit = (event) => {
    event.preventDefault();

    const userCitySearch = document.getElementById("search-input").value.trim();

    console.log(userCitySearch);

    if (!userCitySearch) {
        alert("Please enter a city");
        return;
    }

    localStorage.setItem("user-city", JSON.stringify(userCitySearch));
    getForecast(userCitySearch)
        .then((weatherValues) => {
            console.log(weatherValues)
            // cards
            const todayCard = createTodayCard(weatherValues.today, weatherValues.cityName)
            weatherNow.appendChild(todayCard)
            for (day of weatherValues.forecast) {
                const forecastCard = createFiveDayCard(day)
                weatherContainer.appendChild(forecastCard)
            }
            // save city data tolocalStorage
        })
}

const getForecast = (city) => {
    return cityToLatLong(city)
        .then((latLon) => {
            return fetchWeather(latLon).then((weatherData) => {
                return {
                    weatherData,
                    cityName: latLon.cityName,
                }
            });
        })
        .then(({ weatherData, cityName }) => {
            console.log(weatherData)
            const forecast = [];

            const date = new Date(weatherData[0].dt * 1000)
            const temp = weatherData[0].main.temp_max
            const wind = weatherData[0].wind.speed
            const humidity = weatherData[0].main.humidity
            const icon = weatherData[0].weather[0].icon
            const today = {
                date,
                temp,
                wind,
                humidity,
                icon,
            }
            for (let i = 7; i < weatherData.length; i += 8) {
                const date = new Date(weatherData[i].dt * 1000)
                const temp = weatherData[i].main.temp_max
                const wind = weatherData[i].wind.speed
                const humidity = weatherData[i].main.humidity
                const icon = weatherData[i].weather[0].icon
                const currentDay = {
                    date,
                    temp,
                    wind,
                    humidity,
                    icon,
                }
                forecast.push(currentDay)
            }
            return {
                today,
                forecast,
                cityName,
            }
        });
}

const cityToLatLong = (city) => {
    const apiURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${weatherAPIKey}`

    // return fetch(apiURL)
    //     .then(function (response) {
    //         if (!response.ok) {
    //             alert(response.status + " " + response.statusText);
    //             return;
    //         }

    //         return response.json();
    //     }).then(function (searchResult) {

    //         console.log(searchResult);

    //         if (!searchResult.length) {
    //             console.log('No results found!');
    //             resultContainer.innerHTML = String.raw`<h3>No results found, search again!</h3>`;
    //         } else {
    //             for (const result of searchResult) {
    //                 return {
    //                     lat: result.lat,
    //                     lon: result.lon,
    //                     cityName: result.name,
    //                 };
    //             }
    //         }

    //     }).catch(function (error) {
    //         console.error(error);
    //         alert(error);
    //     })
    return Promise.resolve({
        lat: 37.6922361,
        lon: -97.3375448,
        cityName: "Wichita",
    });
}

// Fetch The Date Using The API
const fetchWeather = (latLon) => {

    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon.lat}&lon=${latLon.lon}&appid=${weatherAPIKey}&units=${units}`;

    // console.log(apiURL);

    // return fetch(apiURL)
    //     .then(function (response) {
    //         if (!response.ok) {
    //             alert(response.status + " " + response.statusText);
    //             return;
    //         }

    //         return response.json();
    //     }).then(function (searchResult) {

    //         console.log(searchResult);

    //         if (!searchResult.list.length) {
    //             console.log('No results found!');
    //             resultContainer.innerHTML = String.raw`<h3>No results found, search again!</h3>`;
    //         } else {
    //             return searchResult.list;
    //         }

    //     }).catch(function (error) {
    //         console.error(error);
    //         alert(error);
    //     })
    return Promise.resolve(forecastCache);
}
// Create Today Card
const createTodayCard = (todayWeather, city) => {
    const todayCard = document.createElement("div")
    todayCard.setAttribute("class", "card");
    const currentCity = document.createElement("h3");
    currentCity.textContent = city
    currentCity.setAttribute("id", "display-city");
    const dailyCardIcon = document.createElement("img");
    dailyCardIcon.src = `https://openweathermap.org/img/wn/${todayWeather.icon}@2x.png`
    const dailyCardTemp = document.createElement("p");
    dailyCardTemp.textContent = "Temp: " + todayWeather.temp + temperatureSymbol
    const dailyCardWind = document.createElement("p");
    dailyCardWind.textContent = "Wind: " + todayWeather.wind + " MPH"
    const dailyCardHumid = document.createElement("p");
    dailyCardHumid.textContent = "Humidity: " + todayWeather.humidity + "%"
    todayCard.appendChild(currentCity)
    todayCard.appendChild(dailyCardIcon)
    todayCard.appendChild(dailyCardTemp)
    todayCard.appendChild(dailyCardWind)
    todayCard.appendChild(dailyCardHumid)
    return todayCard
};

// Create Five Day Weather Cards
const createFiveDayCard = (forecastWeather) => {
    const forecastDayCardContainer = document.createElement("div");
    forecastDayCardContainer.setAttribute("class", "col");
    const forecastDayCard = document.createElement("div");
    forecastDayCard.setAttribute("class", "card", "col");
    forecastDayCardContainer.appendChild(forecastDayCard);
    const h4El = document.createElement('h4');
    h4El.setAttribute("id", "city-name-card")
    h4El.textContent = forecastWeather.date.toLocaleDateString()
    forecastDayCard.appendChild(h4El)

    const forecastCardIcon = document.createElement("img");
    forecastCardIcon.src = `https://openweathermap.org/img/wn/${forecastWeather.icon}.png`
    forecastDayCard.appendChild(forecastCardIcon)
    const forecastCardTemp = document.createElement("p");
    forecastCardTemp.textContent = "Temp: " + forecastWeather.temp + temperatureSymbol
    forecastDayCard.appendChild(forecastCardTemp)
    const forecastCardWind = document.createElement("p");
    forecastCardWind.textContent = "Wind: " + forecastWeather.wind + " MPH"
    forecastDayCard.appendChild(forecastCardWind)
    const forecastCardHumid = document.createElement("p");
    forecastCardHumid.textContent = "Humidity: " + forecastWeather.humidity + "%"
    forecastDayCard.appendChild(forecastCardHumid)

    return forecastDayCardContainer;
}

searchForm.addEventListener('submit', handleWeatherSearchSubmit);
