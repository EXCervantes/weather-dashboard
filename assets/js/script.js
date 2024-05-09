const weatherAPIKey = "8c07d64be9b2561b4616c459acb47fcd";
const weatherNow = document.getElementById("weather-now");
const weatherContainer = document.getElementById("weather-cards");
const cityWeatherCards = document.getElementById("city-name-card");
const searchForm = document.getElementById("search-form")
const searchHistory = document.getElementById("history")
const units = "imperial";
let temperatureSymbol = "ºF";

// Store user search, handle the errors, and clear stored result and reload upon page load
const handleWeatherSearchSubmit = (event) => {
    event.preventDefault();

    const userCitySearch = document.getElementById("search-input").value.trim();

    console.log(userCitySearch);
    document.getElementById("search-input").value
    if (!userCitySearch) {
        alert("Please enter a city");
        return;
    }

    getForecast(userCitySearch)
        .then((weatherValues) => {
            console.log(weatherValues)
            weatherNow.innerHTML = ""
            weatherContainer.innerHTML = ""
            const todayCard = createTodayCard(weatherValues.today, weatherValues.cityName)
            weatherNow.appendChild(todayCard)
            for (day of weatherValues.forecast) {
                const forecastCard = createFiveDayCard(day)
                weatherContainer.appendChild(forecastCard)
            }

            const storedSearches = JSON.parse(localStorage.getItem("storedSearches")) || {}
            storedSearches[weatherValues.cityName] = weatherValues
            localStorage.setItem("storedSearches", JSON.stringify(storedSearches))
            loadStoredSearches();
        })
}

// Get the values for the forecast of a city
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

// Get the latitude and longitude of the searched city and handle fetch errors
const cityToLatLong = (city) => {
    const apiURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${weatherAPIKey}`

    return fetch(apiURL)
        .then(function (response) {
            if (!response.ok) {
                alert(response.status + " " + response.statusText);
                return;
            }

            return response.json();
        }).then(function (searchResult) {

            console.log(searchResult);

            if (!searchResult.length) {
                console.log('No results found!');
                resultContainer.innerHTML = String.raw`<h3>No results found, search again!</h3>`;
            } else {
                for (const result of searchResult) {
                    return {
                        lat: result.lat,
                        lon: result.lon,
                        cityName: result.name,
                    };
                }
            }

        }).catch(function (error) {
            console.error(error);
            alert(error);
        })
}

// Fetch The Date Using The API and handle errors
const fetchWeather = (latLon) => {

    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latLon.lat}&lon=${latLon.lon}&appid=${weatherAPIKey}&units=${units}`;

    console.log(apiURL);

    return fetch(apiURL)
        .then(function (response) {
            if (!response.ok) {
                alert(response.status + " " + response.statusText);
                return;
            }

            return response.json();
        }).then(function (searchResult) {

            console.log(searchResult);

            if (!searchResult.list.length) {
                console.log('No results found!');
                resultContainer.innerHTML = String.raw`<h3>No results found, search again!</h3>`;
            } else {
                return searchResult.list;
            }

        }).catch(function (error) {
            console.error(error);
            alert(error);
        })
}

// Create Today Card's elements and append them
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

// Create 5 Forecast Day Weather Cards elements and append them
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

// Clear search history, load stored searches, get values from the stored city weather conditions
const loadStoredSearches = () => {
    searchHistory.innerHTML = ""
    const storedSearches = JSON.parse(localStorage.getItem("storedSearches")) || {}
    for (const cityWeather of Object.values(storedSearches)) {
        const historyButton = createSearchHistoryButton(cityWeather);
        searchHistory.appendChild(historyButton)
    }
}

// Create the search history button's elements and append it to the page
const createSearchHistoryButton = (cityWeather) => {
    const li = document.createElement("li");
    const button = document.createElement("button")
    button.setAttribute("class", "history")
    button.textContent = cityWeather.cityName;
    li.appendChild(button)
    button.addEventListener("click", () => handleSearchHistoryClick(cityWeather))
    return li
}

// Handle the user click to display the searched cities history onto the page 
const handleSearchHistoryClick = (cityWeather) => {
    console.log(cityWeather)
    weatherNow.innerHTML = ""
    weatherContainer.innerHTML = ""
    cityWeather.today.date = new Date(cityWeather.today.date)
    const todayCard = createTodayCard(cityWeather.today, cityWeather.cityName)
    weatherNow.appendChild(todayCard)
    for (day of cityWeather.forecast) {
        day.date = new Date(day.date)
        const forecastCard = createFiveDayCard(day)
        weatherContainer.appendChild(forecastCard)
    }
}

// User submit eventListener to load the localStorage
searchForm.addEventListener("submit", handleWeatherSearchSubmit);
loadStoredSearches()
