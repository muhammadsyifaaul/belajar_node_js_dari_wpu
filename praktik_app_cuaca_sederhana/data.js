require('dotenv').config()
const axios = require('axios')
const envData = process.env
const urlForWeather = `${envData.GET_WEATHER}${envData.WEATHER_KEY}`
const urlForLocation = `${envData.GET_LOCATION}${envData.LOCATION_KEY}`



async function getUserLocation() {
    try {
        const res = await axios.get(urlForLocation);
        if (!res) {
            throw new Error("Location not found");
        }
        const location = res.data.city;
        console.log(`Your location: ${location}`);
        await getWetherCondotion(location);
    } catch (error) {
        console.error("Error getting user location:", error.message);
    }
}

async function getWetherCondotion(location) {
    try {
        const res = await axios.get(`${urlForWeather}&q=${location}`);
        if (!res.data) {
            throw new Error("Failed to get weather information");
        }

        console.log(`
        last update : ${res.data.current.last_updated} Local Time
        temperature : ${res.data.current.temp_c}°C
        condition : ${res.data.current.condition.text}
            `); 
    } catch (error) {
        console.error("Error getting weather conditions:", error.message);
    }
}
async function searchSpecificPlace(location) {
    try {
        const res = await axios.get(`${urlForWeather}&q=${location}`);
        if (!res.data) {
            throw new Error("Failed to get weather information");
        }
        console.log(`You searching for ${location}`)
        console.log(`
        last update : ${res.data.current.last_updated} Local Time
        temperature : ${res.data.current.temp_c}°C
        condition : ${res.data.current.condition.text}
            `); 
    } catch (error) {
        console.error("Error getting weather conditions:", error.message);
    }
}

module.exports = {
    getUserLocation,
    searchSpecificPlace
}