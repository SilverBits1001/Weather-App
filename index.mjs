import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv'

dotenv.config()
console.log(process.env)

const app = express();
app.listen(3000, () => console.log('listening at 3000'))
app.use(express.static('public'))




app.get('/weather/:lat/:lon', async (request, response) => {
    const lat = request.params.lat
    const lon = request.params.lon
    console.log(lat, lon);
    const apiUrl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
    const fetchResponse = await fetch(apiUrl);
    const json = await fetchResponse.json();
    response.json(json)
    console.log(json);

})

app.get('/test', (request, response) => {

    console.log('worked');

})

/* app.get('/map/:layer/:z/:x/:y', async (request, response) => {
    const layer = request.params.layer
    const z = request.params.z
    const x = request.params.x
    const y = request.params.y
    const apiUrl = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${apiKey}`
    const fetchResponse = await fetch(apiUrl);
  //  const json = await fetchResponse.json();
    response.end(json)
    console.log(json);

}) */

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}




/* 
////Call current weather data
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//Current and forecast weather data (hourly)
To get access to current weather, minute forecast for 1 hour, 
hourly forecast for 48 hours, daily forecast for 7 days and 
government weather alerts, please use this section of the 
documentation.

https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


///Weather Map
https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={API key}

///Air Pollution
http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}


*/