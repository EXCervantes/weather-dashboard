const weatherAPIKey = "882499a76b7f0c68ee718535237dda81";
const weatherNow = document.getElementById("weather-now");
const weatherContainer = document.getElementById("weather-cards");
const cityWeatherCards = document.getElementById("city-name-card");
const searchForm = document.getElementById("search-form")


// fetch response
// await response
// await response.json
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={WeatherAPIKey}

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
            const todayCard = createTodayCard(weatherValues.today)
            weatherNow.appendChild(todayCard)
            // save city data tolocalStorage
        })
}

const getForecast = (city) => {
    return cityToLatLong(city)
        .then((latLon) => {
            console.log(latLon)
            return fetchWeather(latLon)
        })
        .then((weatherData) => {
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
            }
        });


    // call fetchWeather(lat, long)
    // Display Forecast returned by fetchWeather()
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
    //                 };
    //             }
    //         }

    //     }).catch(function (error) {
    //         console.error(error);
    //         alert(error);
    //     })
    return Promise.resolve({
        lat: 37.6922361,
        lon: -97.3375448
    });
}

/*const getWeatherValues = () => {
    const date = response.list[0].dt
    const temp = response.list[0].main.temp_max
    const wind = response.list[0].wind
    const humidity = response.list[0].main.humidity

    console.log()

    fetchWeather(latLon);
} */

// Convert to Current Time
// Timestamp is Seconds
const getLocalDate = (dt) => {
    const date = new Date()
    date.toLocaleDateString()
    console.log(date);
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
const createTodayCard = (todayWeather) => {
    const element = document.createElement("div")
    //img scr `https://openweathermap.org/img/wn/${todayWeather.icon}.png`
    element.innerHTML = JSON.stringify(todayWeather);
    return element
};

// Create Five Day Weather Cards
const createFiveDayCard = () => {
    const weatherCard = $('<div>').addClass('card weather-card my-3').attr('daily-weather');
    const cardHeader = $('<div>').addClass('card-header h4').text(weather.name);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(weather);
    task
    cardBody.append(cardDescription, cardDueDate);
    taskCard.append(cardHeader, cardBody);

    return weatherCard;
}

searchForm.addEventListener('submit', handleWeatherSearchSubmit);
