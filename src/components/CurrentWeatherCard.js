import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'

import WeekForecast from './WeekForecast'
import { BlurView } from 'expo-blur'
import { WeatherContext } from './WeatherContextProvide';
import { SearchedWeatherContext } from './SearchedContextProvider';




export default function CurrentWeatherCard({ searched, searchedWeather}) {
     const weather = searched ? useContext(SearchedWeatherContext) : useContext(WeatherContext);
//console.log(searched);
    return (
        < View style={styles.weatherCard} >

            <BlurView intensity={3} tint={'default'} style={{ alignItems: 'center', }}>
                <Text style={styles.weatherCardText}>{weather.currWeather.name}</Text>
                <Text style={styles.weatherCardTemp}>
                    {parseInt(weather.currWeather.main.temp)}
                </Text>
                <Text
        style={styles.weatherDetails}
                >{weather.currWeather.weather[0].description}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.weatherDetails}>
                        H: {parseInt(weather.currWeather.main.temp_min)}&#176;
                    </Text>
                    <Text style={styles.weatherDetails}>
                        H: {parseInt(weather.currWeather.main.temp_max)}&#176;
                    </Text>
                </View>
            </BlurView>
        </View >

    )


}

const styles = StyleSheet.create({
    weatherCard: {
        borderRadius: 0,
        marginVertical: 30,
        overflow: 'hidden',
        marginHorizontal: 50



    },
    weatherCardText: {
        fontSize: 30,
        fontWeight: '400'
    },
    weatherCardTemp: {
        fontSize: 100,
        fontWeight: '200'
    },
    weatherDetails: {
        fontSize: 20,
        fontWeight: '400',
        textTransform: 'capitalize'

    }

})