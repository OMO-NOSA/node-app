const request = require('request');

const getWeather = (lat, lng, callback) => {

    request({
        url:`https://api.darksky.net/forecast/a09e1b7a03cf284d5a30443eb38ce39f/${lat},${lng}`,
        json: true
        
    }, (error, response, body) => {
        if(error){
            callback('Unable to reach weather API at this point');
        }
        else if(response.statusCode === 400){
            callback('Weather not found, please check back');

        }

        else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
        });  
    }
})

}



module.exports.getWeather = getWeather;