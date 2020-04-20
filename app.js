// const geocode = require('./geocode/geocode');
// const yargs = require('yargs');




// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to get weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

//     console.log(argv);



// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage)
//     } else {
//         console.log(JSON.stringify(results, undefines, 2));
//     }
// });


const request = require('request');

const getTemperature = () => {

    request({
        url:'https://api.darksky.net/forecast/a09e1b7a03cf284d5a30443eb38ce39f/37.7,-122.423',
        json: true
        
    }, (error, response, body) => {

        return (!error && response.statusCode == 200) ? console.log(body.currently.temperature) : console.log('Unable to reach weather'); 
    });
}

getTemperature();

