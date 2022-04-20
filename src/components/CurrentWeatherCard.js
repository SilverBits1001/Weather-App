import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import WeekForecast from './WeekForecast'

const currentWeather = {
    "coord": {
        "lon": -118.3199,
        "lat": 33.805
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 65.91,
        "feels_like": 64.92,
        "temp_min": 60.87,
        "temp_max": 77.77,
        "pressure": 1015,
        "humidity": 58
    },
    "visibility": 10000,
    "wind": {
        "speed": 14.97,
        "deg": 260
    },
    "clouds": {
        "all": 0
    },
    "dt": 1649970136,
    "sys": {
        "type": 1,
        "id": 6037,
        "country": "US",
        "sunrise": 1649942607,
        "sunset": 1649989388
    },
    "timezone": -25200,
    "id": 5367767,
    "name": "Lomita",
    "cod": 200
}


export default function CurrentWeatherCard() {


    async function apiFetch() {
        const apiUrl = 'http://localhost:3000/test'
        const response = await fetch(apiUrl)
     
     
    }

    useEffect(() => {
        apiFetch()
        console.log('hellllo');
    }, [])


    return (
        <View style={styles.weatherCard}>

            <View style={{ alignItems: 'center', }}>
                <Text style={styles.weatherCardText}>{currentWeather.name}</Text>
                <Text style={styles.weatherCardTemp}>
                    {parseInt(currentWeather.main.temp)}
                </Text>
                <Text

                    style={styles.weatherDetails}
                >{currentWeather.weather[0].description}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.weatherDetails}>
                        H: {parseInt(currentWeather.main.temp_min)}&#176;
                    </Text>
                    <Text style={styles.weatherDetails}>
                        H: {parseInt(currentWeather.main.temp_max)}&#176;
                    </Text>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    weatherCard: {
        borderRadius: 15,
        marginVertical: 30

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
        fontWeight: '400'

    }

})