const weatherAPIKey = "ce1608d3a3dfc31af73417422c4430d7";
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
}

const getForecast = (city) => {
    cityToLatLong(city).then((latLon) => {
        console.log(latLon)
        return fetchWeather(latLon)
    }).then((weather) => {
        console.log(weather)
    })


    // call fetchWeather(lat, long)
    // Display Forecast returned by fetchWeather()
}

const cityToLatLong = (city) => {
    const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${weatherAPIKey}`

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
                    };
                }
            }

        }).catch(function (error) {
            console.error(error);
            alert(error);
        })
}

const getSearchParams = () => {
    const searchParams = document.location.search.split.apply("&");

    const query = searchParams[0].split("=").pop();


    fetchWeather(query);
}

// Convert to Current Time
// Timestamp is Seconds
const getLocalDate = () => {
    const date = new Date()
    date.toLocaleDateString()
}

// Fetch
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
                // for (const result of searchResult.list) {
                //     console.warn("Print Result", result)

                // }
                return searchResult.list;
            }

        }).catch(function (error) {
            console.error(error);
            alert(error);
        })
}

// Create Five Day Weather Cards
const createWeatherCard = (query) => {
    const weatherCard = $('<div>').addClass('card weather-card my-3').attr('daily-weather');
    const cardHeader = $('<div>').addClass('card-header h4').text(weather.name);
    const cardBody = $('<div>').addClass('card-body');
    const cardDescription = $('<p>').addClass('card-text').text(weather);
    task
    cardBody.append(cardDescription, cardDueDate);
    taskCard.append(cardHeader, cardBody);

    return weatherCard;
}

// 

// let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

searchForm.addEventListener('submit', handleWeatherSearchSubmit);
