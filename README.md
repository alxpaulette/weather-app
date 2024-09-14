# Weather App

Run with `node playground.js`

Expected output:
```
The Weather Today in London: 
Fetching location data for London
calling http://api.openweathermap.org/geo/1.0/direct?q=London, Kentucky, US
calling https://api.openweathermap.org/data/2.5/forecast?lat=37.1289771&lon=-84.0832646
The current weather in London, Kentucky, US is:
The five day forecast for London, Kentucky, US is:
[
  {
    date: 1661871600,
    temperature: 296.76,
    humidity: 69,
    windSpeed: 0.62,
    weather: 'light rain'
  },
  {
    date: 1661882400,
    temperature: 295.45,
    humidity: 71,
    windSpeed: 1.97,
    weather: 'light rain'
  },
  {
    date: 1661893200,
    temperature: 292.46,
    humidity: 80,
    windSpeed: 2.66,
    weather: 'light rain'
  },
  {
    date: 1662292800,
    temperature: 294.93,
    humidity: 64,
    windSpeed: 1.14,
    weather: 'overcast clouds'
  },
  {
    temperature: 296.76,
    humidity: 69,
    windSpeed: 0.62,
    weather: 'light rain'
  }
]
```