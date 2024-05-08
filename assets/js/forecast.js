const forecastCache = [
    {
        "dt": 1715148000,
        "main": {
            "temp": 64.54,
            "feels_like": 63,
            "temp_min": 62.83,
            "temp_max": 64.54,
            "pressure": 982,
            "sea_level": 982,
            "grnd_level": 951,
            "humidity": 49,
            "temp_kf": 0.95
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 8.75,
            "deg": 207,
            "gust": 30.56
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-08 06:00:00"
    },
    {
        "dt": 1715158800,
        "main": {
            "temp": 62.85,
            "feels_like": 61.23,
            "temp_min": 59.49,
            "temp_max": 62.85,
            "pressure": 987,
            "sea_level": 987,
            "grnd_level": 950,
            "humidity": 51,
            "temp_kf": 1.87
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "clouds": {
            "all": 2
        },
        "wind": {
            "speed": 4.92,
            "deg": 183,
            "gust": 13.04
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-08 09:00:00"
    },
    {
        "dt": 1715169600,
        "main": {
            "temp": 58.8,
            "feels_like": 57.11,
            "temp_min": 55.94,
            "temp_max": 58.8,
            "pressure": 993,
            "sea_level": 993,
            "grnd_level": 951,
            "humidity": 58,
            "temp_kf": 1.59
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 7
        },
        "wind": {
            "speed": 7.18,
            "deg": 312,
            "gust": 14.18
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-08 12:00:00"
    },
    {
        "dt": 1715180400,
        "main": {
            "temp": 65.35,
            "feels_like": 64.17,
            "temp_min": 65.35,
            "temp_max": 65.35,
            "pressure": 1000,
            "sea_level": 1000,
            "grnd_level": 953,
            "humidity": 55,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 1
        },
        "wind": {
            "speed": 13.06,
            "deg": 341,
            "gust": 19.95
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-08 15:00:00"
    },
    {
        "dt": 1715191200,
        "main": {
            "temp": 72.72,
            "feels_like": 71.33,
            "temp_min": 72.72,
            "temp_max": 72.72,
            "pressure": 1001,
            "sea_level": 1001,
            "grnd_level": 954,
            "humidity": 35,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 1
        },
        "wind": {
            "speed": 11.97,
            "deg": 357,
            "gust": 13.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-08 18:00:00"
    },
    {
        "dt": 1715202000,
        "main": {
            "temp": 74.75,
            "feels_like": 73.2,
            "temp_min": 74.75,
            "temp_max": 74.75,
            "pressure": 1003,
            "sea_level": 1003,
            "grnd_level": 956,
            "humidity": 27,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 12.82,
            "deg": 344,
            "gust": 14.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-08 21:00:00"
    },
    {
        "dt": 1715212800,
        "main": {
            "temp": 70.38,
            "feels_like": 68.81,
            "temp_min": 70.38,
            "temp_max": 70.38,
            "pressure": 1005,
            "sea_level": 1005,
            "grnd_level": 957,
            "humidity": 36,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 9.37,
            "deg": 344,
            "gust": 15.66
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-09 00:00:00"
    },
    {
        "dt": 1715223600,
        "main": {
            "temp": 61.11,
            "feels_like": 58.89,
            "temp_min": 61.11,
            "temp_max": 61.11,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 960,
            "humidity": 42,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 5.86,
            "deg": 9,
            "gust": 12.06
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-09 03:00:00"
    },
    {
        "dt": 1715234400,
        "main": {
            "temp": 57.58,
            "feels_like": 55.15,
            "temp_min": 57.58,
            "temp_max": 57.58,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 961,
            "humidity": 45,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 5.48,
            "deg": 37,
            "gust": 7.76
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-09 06:00:00"
    },
    {
        "dt": 1715245200,
        "main": {
            "temp": 54.32,
            "feels_like": 51.62,
            "temp_min": 54.32,
            "temp_max": 54.32,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 963,
            "humidity": 46,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "clouds": {
            "all": 20
        },
        "wind": {
            "speed": 7.38,
            "deg": 327,
            "gust": 15.35
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-09 09:00:00"
    },
    {
        "dt": 1715256000,
        "main": {
            "temp": 52.27,
            "feels_like": 49.93,
            "temp_min": 52.27,
            "temp_max": 52.27,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 965,
            "humidity": 58,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 51
        },
        "wind": {
            "speed": 8.99,
            "deg": 337,
            "gust": 21.94
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-09 12:00:00"
    },
    {
        "dt": 1715266800,
        "main": {
            "temp": 61.63,
            "feels_like": 59.99,
            "temp_min": 61.63,
            "temp_max": 61.63,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 967,
            "humidity": 53,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 93
        },
        "wind": {
            "speed": 12.03,
            "deg": 335,
            "gust": 16.78
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-09 15:00:00"
    },
    {
        "dt": 1715277600,
        "main": {
            "temp": 68.65,
            "feels_like": 67.14,
            "temp_min": 68.65,
            "temp_max": 68.65,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 967,
            "humidity": 41,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 85
        },
        "wind": {
            "speed": 13.42,
            "deg": 341,
            "gust": 16.87
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-09 18:00:00"
    },
    {
        "dt": 1715288400,
        "main": {
            "temp": 72.05,
            "feels_like": 70.74,
            "temp_min": 72.05,
            "temp_max": 72.05,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 967,
            "humidity": 38,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "clouds": {
            "all": 18
        },
        "wind": {
            "speed": 11.32,
            "deg": 354,
            "gust": 15.73
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-09 21:00:00"
    },
    {
        "dt": 1715299200,
        "main": {
            "temp": 69.46,
            "feels_like": 68.27,
            "temp_min": 69.46,
            "temp_max": 69.46,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 966,
            "humidity": 46,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 10
        },
        "wind": {
            "speed": 9.89,
            "deg": 9,
            "gust": 15.88
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-10 00:00:00"
    },
    {
        "dt": 1715310000,
        "main": {
            "temp": 61.95,
            "feels_like": 60.57,
            "temp_min": 61.95,
            "temp_max": 61.95,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 969,
            "humidity": 58,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "clouds": {
            "all": 40
        },
        "wind": {
            "speed": 7.83,
            "deg": 354,
            "gust": 20.94
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-10 03:00:00"
    },
    {
        "dt": 1715320800,
        "main": {
            "temp": 56.34,
            "feels_like": 54.97,
            "temp_min": 56.34,
            "temp_max": 56.34,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 971,
            "humidity": 70,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
            }
        ],
        "clouds": {
            "all": 28
        },
        "wind": {
            "speed": 6.87,
            "deg": 353,
            "gust": 17.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-10 06:00:00"
    },
    {
        "dt": 1715331600,
        "main": {
            "temp": 53.06,
            "feels_like": 51.55,
            "temp_min": 53.06,
            "temp_max": 53.06,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 971,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "clouds": {
            "all": 4
        },
        "wind": {
            "speed": 7.9,
            "deg": 341,
            "gust": 19.37
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-10 09:00:00"
    },
    {
        "dt": 1715342400,
        "main": {
            "temp": 51.13,
            "feels_like": 49.86,
            "temp_min": 51.13,
            "temp_max": 51.13,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 971,
            "humidity": 83,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 2
        },
        "wind": {
            "speed": 6.85,
            "deg": 341,
            "gust": 16.98
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-10 12:00:00"
    },
    {
        "dt": 1715353200,
        "main": {
            "temp": 62.04,
            "feels_like": 60.73,
            "temp_min": 62.04,
            "temp_max": 62.04,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 972,
            "humidity": 59,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 8.95,
            "deg": 351,
            "gust": 13
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-10 15:00:00"
    },
    {
        "dt": 1715364000,
        "main": {
            "temp": 70,
            "feels_like": 68.63,
            "temp_min": 70,
            "temp_max": 70,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 971,
            "humidity": 41,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 0
        },
        "wind": {
            "speed": 8.08,
            "deg": 326,
            "gust": 12.66
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-10 18:00:00"
    },
    {
        "dt": 1715374800,
        "main": {
            "temp": 73.89,
            "feels_like": 72.57,
            "temp_min": 73.89,
            "temp_max": 73.89,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 969,
            "humidity": 34,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 41
        },
        "wind": {
            "speed": 9.13,
            "deg": 323,
            "gust": 14.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-10 21:00:00"
    },
    {
        "dt": 1715385600,
        "main": {
            "temp": 71.85,
            "feels_like": 70.75,
            "temp_min": 71.85,
            "temp_max": 71.85,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 967,
            "humidity": 43,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 47
        },
        "wind": {
            "speed": 5.79,
            "deg": 26,
            "gust": 9.62
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-11 00:00:00"
    },
    {
        "dt": 1715396400,
        "main": {
            "temp": 62.42,
            "feels_like": 61.14,
            "temp_min": 62.42,
            "temp_max": 62.42,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 968,
            "humidity": 59,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "clouds": {
            "all": 22
        },
        "wind": {
            "speed": 3.47,
            "deg": 122,
            "gust": 3.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-11 03:00:00"
    },
    {
        "dt": 1715407200,
        "main": {
            "temp": 59.58,
            "feels_like": 58.19,
            "temp_min": 59.58,
            "temp_max": 59.58,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 968,
            "humidity": 63,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "clouds": {
            "all": 13
        },
        "wind": {
            "speed": 3.67,
            "deg": 201,
            "gust": 3.83
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-11 06:00:00"
    },
    {
        "dt": 1715418000,
        "main": {
            "temp": 57.54,
            "feels_like": 56.1,
            "temp_min": 57.54,
            "temp_max": 57.54,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 967,
            "humidity": 66,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "clouds": {
            "all": 7
        },
        "wind": {
            "speed": 5.21,
            "deg": 224,
            "gust": 6.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-11 09:00:00"
    },
    {
        "dt": 1715428800,
        "main": {
            "temp": 56.12,
            "feels_like": 54.54,
            "temp_min": 56.12,
            "temp_max": 56.12,
            "pressure": 1015,
            "sea_level": 1015,
            "grnd_level": 967,
            "humidity": 66,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "clouds": {
            "all": 6
        },
        "wind": {
            "speed": 6.58,
            "deg": 234,
            "gust": 13.44
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-11 12:00:00"
    },
    {
        "dt": 1715439600,
        "main": {
            "temp": 69.67,
            "feels_like": 68.45,
            "temp_min": 69.67,
            "temp_max": 69.67,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 966,
            "humidity": 45,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 28
        },
        "wind": {
            "speed": 7.16,
            "deg": 265,
            "gust": 11.43
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-11 15:00:00"
    },
    {
        "dt": 1715450400,
        "main": {
            "temp": 78.48,
            "feels_like": 77.29,
            "temp_min": 78.48,
            "temp_max": 78.48,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 965,
            "humidity": 27,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 31
        },
        "wind": {
            "speed": 5.73,
            "deg": 263,
            "gust": 9.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-11 18:00:00"
    },
    {
        "dt": 1715461200,
        "main": {
            "temp": 77.45,
            "feels_like": 76.53,
            "temp_min": 77.45,
            "temp_max": 77.45,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 963,
            "humidity": 35,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 46
        },
        "wind": {
            "speed": 8.14,
            "deg": 219,
            "gust": 9.19
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-11 21:00:00"
    },
    {
        "dt": 1715472000,
        "main": {
            "temp": 75.58,
            "feels_like": 74.95,
            "temp_min": 75.58,
            "temp_max": 75.58,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 961,
            "humidity": 45,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 58
        },
        "wind": {
            "speed": 5.75,
            "deg": 101,
            "gust": 8.16
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-12 00:00:00"
    },
    {
        "dt": 1715482800,
        "main": {
            "temp": 62.67,
            "feels_like": 62.64,
            "temp_min": 62.67,
            "temp_max": 62.67,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 964,
            "humidity": 85,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }
        ],
        "clouds": {
            "all": 98
        },
        "wind": {
            "speed": 7.18,
            "deg": 185,
            "gust": 13.87
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
            "3h": 2.79
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-12 03:00:00"
    },
    {
        "dt": 1715493600,
        "main": {
            "temp": 61.45,
            "feels_like": 61.23,
            "temp_min": 61.45,
            "temp_max": 61.45,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 963,
            "humidity": 84,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 6.46,
            "deg": 183,
            "gust": 19.48
        },
        "visibility": 10000,
        "pop": 0.8,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-12 06:00:00"
    },
    {
        "dt": 1715504400,
        "main": {
            "temp": 60.04,
            "feels_like": 59.59,
            "temp_min": 60.04,
            "temp_max": 60.04,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 963,
            "humidity": 82,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 97
        },
        "wind": {
            "speed": 7.38,
            "deg": 216,
            "gust": 21.88
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-12 09:00:00"
    },
    {
        "dt": 1715515200,
        "main": {
            "temp": 60.4,
            "feels_like": 59.86,
            "temp_min": 60.4,
            "temp_max": 60.4,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 963,
            "humidity": 79,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 97
        },
        "wind": {
            "speed": 5.97,
            "deg": 218,
            "gust": 19.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-12 12:00:00"
    },
    {
        "dt": 1715526000,
        "main": {
            "temp": 70.57,
            "feels_like": 70.02,
            "temp_min": 70.57,
            "temp_max": 70.57,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 963,
            "humidity": 57,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 87
        },
        "wind": {
            "speed": 8.81,
            "deg": 228,
            "gust": 14.61
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-12 15:00:00"
    },
    {
        "dt": 1715536800,
        "main": {
            "temp": 77.67,
            "feels_like": 77.02,
            "temp_min": 77.67,
            "temp_max": 77.67,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 963,
            "humidity": 40,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 72
        },
        "wind": {
            "speed": 9.86,
            "deg": 216,
            "gust": 11.92
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-12 18:00:00"
    },
    {
        "dt": 1715547600,
        "main": {
            "temp": 79.92,
            "feels_like": 79.92,
            "temp_min": 79.92,
            "temp_max": 79.92,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 961,
            "humidity": 37,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "clouds": {
            "all": 27
        },
        "wind": {
            "speed": 9.08,
            "deg": 195,
            "gust": 8.19
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-12 21:00:00"
    },
    {
        "dt": 1715558400,
        "main": {
            "temp": 74.28,
            "feels_like": 73.85,
            "temp_min": 74.28,
            "temp_max": 74.28,
            "pressure": 1008,
            "sea_level": 1008,
            "grnd_level": 960,
            "humidity": 52,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
            }
        ],
        "clouds": {
            "all": 55
        },
        "wind": {
            "speed": 10.07,
            "deg": 178,
            "gust": 12.91
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2024-05-13 00:00:00"
    },
    {
        "dt": 1715569200,
        "main": {
            "temp": 67.33,
            "feels_like": 67.06,
            "temp_min": 67.33,
            "temp_max": 67.33,
            "pressure": 1009,
            "sea_level": 1009,
            "grnd_level": 962,
            "humidity": 70,
            "temp_kf": 0
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ],
        "clouds": {
            "all": 57
        },
        "wind": {
            "speed": 7.96,
            "deg": 175,
            "gust": 18.59
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2024-05-13 03:00:00"
    }
]