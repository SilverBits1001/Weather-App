import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard'
import HourlyForecast from '../components/HourlyForecast'
import WeekForecast from '../components/WeekForecast'
import Map from '../components/Map'
import AirQuality from '../components/Widgets/AirQuality'
import Sunrise from '../components/Widgets/Sunrise'
import Widgets from '../components/Widgets'

export default function Home() {

    const image =  require('../../assets/dawn.png') ;

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>

            <ScrollView style={{ flex: 1, width: '100%', marginBottom:50, paddingVertical:25 }}>

                <CurrentWeatherCard />
                <HourlyForecast />
                <WeekForecast />
                <Map />
                <Widgets />

            </ScrollView>
        </ImageBackground>





    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    


    }

})