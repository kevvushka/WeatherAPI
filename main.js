const axios = require('axios');

const url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.43&lon=24.75"

var data = axios.get(url, {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
    })
    .then(function (response) {
        var data = response.data
        for (var i = 0; i < 10; i++) {
            var time = new Date(data.properties.timeseries[i].time).toLocaleString()
            var temp = data.properties.timeseries[i].data.instant.details.air_temperature.toFixed(1)
            var wind = data.properties.timeseries[i].data.instant.details.wind_speed

            console.log(time + " | " + temp + "C | " + wind + "m/s")
        }
    })
    .catch(function (error) {
        console.log(error);
    }
);