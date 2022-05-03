import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard'
import HourlyForecast from '../components/HourlyForecast'
import WeekForecast from '../components/WeekForecast'
import Map from '../components/Map'
import AirQuality from '../components/Widgets/WindSpeed'
import Sunrise from '../components/Widgets/Sunrise'
import Widgets from '../components/Widgets'
import { WeatherContext } from '../components/WeatherContextProvide'
import { SearchedWeatherContextProvider } from '../components/SearchedContextProvider'



export default function SearchedLocation({ route }) {

    const [bgCount, setBgCount] = useState(0)
    const bg = ['dawn', 'afternoon', 'evening', 'night']
    let image = require('../../assets/evening.png');


    const { weather, location, oneCall } = route.params;
    const weatherObj = { currWeather: weather, oneCall: oneCall }
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>

            <ScrollView style={{ flex: 1, width: '100%', paddingVertical: 25 }}
                contentContainerStyle={{ paddingBottom: 75 }}
            >
                <SearchedWeatherContextProvider searchedWeather={weatherObj}>
                    <CurrentWeatherCard searched={true} />
                    <HourlyForecast searched={true} />
                    <WeekForecast searched={true} />
                    <Map searched={true} />
                    <Widgets searched={true} />
                </SearchedWeatherContextProvider>
            </ScrollView>
        </ImageBackground>





    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    }

})