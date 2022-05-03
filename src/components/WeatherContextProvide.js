import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState, useEffect } from 'react'
import * as Location from 'expo-location';

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
    const [currWeather, setCurrWeather] = useState({})
    const [oneCall, setOneCall] = useState({})
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [searched, setSearched] = useState([])
    const axios = require('axios');

    async function fetchWeather(fetchType, location) {
        const ApiUrl = `https://rn-weather-fetch.herokuapp.com/weather/${fetchType}/${location.coords.latitude}/${location.coords.longitude}`

        try {
            const response = await axios.get(ApiUrl, {})
            switch (fetchType) {
                case 'weather':
                    setCurrWeather(response.data)
                    break;
                case 'onecall':
                    setOneCall(response.data)
                    break;
                default:
                    console.log(`Bad api call at ${fetchType}`);
            }
        } catch (error) {
            console.error(error)

        }
    }



    useEffect(() => {

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            fetchWeather('weather', location)
            fetchWeather('onecall', location)
        })()
    }, [])



    return (

        <WeatherContext.Provider value={{ currWeather: currWeather, oneCall: oneCall, location: location, searched:searched }}>
            {children}
        </WeatherContext.Provider>
    )
}
export { WeatherContext, WeatherContextProvider };