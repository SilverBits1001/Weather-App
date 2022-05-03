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



export default function Home() {

    const [bgCount, setBgCount] = useState(0)
    const bg = ['dawn', 'afternoon', 'evening', 'night']
    let image = require('../../assets/evening.png');

    const [currWeather, setWeather] = useState({})
    const [oneCall, setOneCall] = useState({})
    const [loaded, setLoaded] = useState(false)

/*     const axios = require('axios');
    async function fetchWeather(fetchType) {
        const ApiUrl = `https://rn-weather-fetch.herokuapp.com/weather/${fetchType}/33.78854943134751/-118.31770488679959`

        try {
            const response = await axios.get(ApiUrl, {})
            switch (fetchType) {
                case 'weather':
                    setWeather(response.data)
                    break;
                case 'onecall':
                    setOneCall(response.data)
                    break;
                default:
                    console.log(`Bad api call at ${fetchType}`);
            }
            setLoaded(true)

        } catch (error) {
            console.error(error)
            setLoaded(false)
        }
    }

    useEffect(() => {
        fetchWeather('weather')
        fetchWeather('onecall')
        console.log('homescreen', oneCall)

    }, [])
 */
    const weather = useContext(WeatherContext);
   // console.log('contexxt', weather);
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>

            <ScrollView style={{ flex: 1, width: '100%',  paddingVertical: 25 }}
            contentContainerStyle={{paddingBottom:75}}
            >

                {Object.keys(weather.currWeather).length > 0 && Object.keys(weather.oneCall).length > 0 ? (
                    <>
                        <CurrentWeatherCard />
                         <HourlyForecast />
                       <WeekForecast oneCall={oneCall}/>
                          <Map />
                        <Widgets /> 
                    </>
                ) : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator  size="large" color="#fff" />
                </View>}


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