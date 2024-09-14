const weather = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1661871600,
      main: {
        temp: 296.76,
        feels_like: 296.98,
        temp_min: 296.76,
        temp_max: 297.87,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 933,
        humidity: 69,
        temp_kf: -1.11,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.32,
      rain: {
        "3h": 0.26,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-30 15:00:00",
    },
    {
      dt: 1661882400,
      main: {
        temp: 295.45,
        feels_like: 295.59,
        temp_min: 292.84,
        temp_max: 295.45,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 71,
        temp_kf: 2.61,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.97,
        deg: 157,
        gust: 3.39,
      },
      visibility: 10000,
      pop: 0.33,
      rain: {
        "3h": 0.57,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-30 18:00:00",
    },
    {
      dt: 1661893200,
      main: {
        temp: 292.46,
        feels_like: 292.54,
        temp_min: 290.31,
        temp_max: 292.46,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 931,
        humidity: 80,
        temp_kf: 2.15,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.66,
        deg: 210,
        gust: 3.58,
      },
      visibility: 10000,
      pop: 0.7,
      rain: {
        "3h": 0.49,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-30 21:00:00",
    },
    {
      dt: 1662292800,
      main: {
        temp: 294.93,
        feels_like: 294.83,
        temp_min: 294.93,
        temp_max: 294.93,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 935,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 1.14,
        deg: 17,
        gust: 1.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-09-04 12:00:00",
    },
  ],
  city: {
    id: 3163858,
    name: "London",
    coord: {
      lat: 37.1289771,
      lon: -84.0832646,
    },
    country: "USA",
    population: 4593,
    timezone: 7200,
    sunrise: 1661834187,
    sunset: 1661882248,
  },
};

// using geoCode
const london = [
  {
    name: "London",
    lat: 37.1289771,
    lon: -84.0832646,
    country: "US",
    state: "Kentucky",
  },
];

const city = "London, Kentucky, US";

function fetchLocationData(query) {
  console.log(`Fetching location data for ${query[0].name}`);

  // fetch this:
  // const geoCodeUrl = buildGeocodeQuery()
  // const location = fetch(geoCodeUrl);
  buildGeocodeQuery();

  // Geocode API returns an array of objects. If user has inputted info correctly, it should only return one object. Have this check for multiple just in case
  // if (location.length > 1)
  if (london.length > 1) {
    return `error`;
  }

  // return location[0]
  return london[0];
}

function destructureLocationData(locationData) {
  const { lat, lon } = locationData;
  return { lat, lon };
}

function buildGeocodeQuery() {
  console.log(`calling http://api.openweathermap.org/geo/1.0/direct?q=${city}`);
  // return `http://api.openweathermap.org/geo/1.0/direct?q=${city}`
}

function buildWeatherQuery(coordinates) {
  console.log(
    `calling https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}`
  );
  // return `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}`
}

function fetchAndDestructureLocationData() {
  const locationData = fetchLocationData(london);
  const destructure = destructureLocationData(locationData);

  return destructure;
}

function fetchWeatherData(coordinates) {
  // fetch this
  // const baseUrl = buildWeatherQuery()
  // const weather = fetch(baseUrl);
  buildWeatherQuery(coordinates);

  // return the response
  return weather;
}

function parseCurrentWeather(response) {
  const { main, weather, wind } = response.list[0];
  const current = {
    temperature: main.temp,
    humidity: main.humidity,
    windSpeed: wind.speed,
    weather: weather[0].description,
  };

  console.log(`The current weather in ${city} is:`);
  return current;
}

function buildForecastArray(currentWeather, weatherData) {
  let forecastArray = [];
  forecastArray = weatherData.list.map((day) => {
    return {
      date: day.dt,
      temperature: day.main.temp,
      humidity: day.main.humidity,
      windSpeed: day.wind.speed,
      weather: day.weather[0].description,
    };
  });

  console.log(`The five day forecast for ${city} is:`);
  forecastArray.push(currentWeather)
  return forecastArray;
}

function getWeatherForCity(city) {
  console.log(`The Weather Today in ${city[0].name}: `);

  const location = fetchAndDestructureLocationData(city);
  const weather = fetchWeatherData(location);
  const currentWeather = parseCurrentWeather(weather);
  const forecast = buildForecastArray(currentWeather, weather);

  return forecast;
}

// console.log(getWeatherForCity(city));
console.log(getWeatherForCity(london));
