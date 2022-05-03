import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState, useEffect } from 'react'


const SearchedWeatherContext = createContext();

const SearchedWeatherContextProvider = ({ children, searchedWeather }) => {
    console.log('search context', searchedWeather);
    const [currWeather, setCurrWeather] = useState({})
    const [oneCall, setOneCall] = useState({})
    const [location, setLocation] = useState(null);

console.log(searchedWeather.oneCall.length);

    return (

        <SearchedWeatherContext.Provider value={{ currWeather: searchedWeather.currWeather, oneCall: searchedWeather.oneCall, location: location,  }}>
            {children}
        </SearchedWeatherContext.Provider>
    )
}
export { SearchedWeatherContext, SearchedWeatherContextProvider };