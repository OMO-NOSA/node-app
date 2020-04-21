const yargs = require('yargs');
const axios = require('axios');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');




const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to get weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    //console.log(argv);

    
var encodedAddress = encodedURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {

        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;

    var weatherUrl = `https://api.darksky.net/forecast/a09e1b7a03cf284d5a30443eb38ce39f/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then(() => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}, It feels like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message);
    }
})





// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(results.address);
//         weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
//             if (errorMessage) {
//                 console.log(errorMessage);
//             } else {
//                 console.log(`It's currently ${weatherResults.temperature}, It feels like ${weatherResults.apparentTemperature}`);
//             }
//         })
        
//     }
// });





