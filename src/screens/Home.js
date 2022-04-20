import { StyleSheet, Text, View, ScrollView, ImageBackground, Button } from 'react-native'
import React, { useState } from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard'
import HourlyForecast from '../components/HourlyForecast'
import WeekForecast from '../components/WeekForecast'
import Map from '../components/Map'
import AirQuality from '../components/Widgets/AirQuality'
import Sunrise from '../components/Widgets/Sunrise'
import Widgets from '../components/Widgets'
export default function Home() {

    const [bgCount, setBgCount] = useState(0)
    const bg = ['dawn', 'afternoon', 'evening', 'night']

    let image = require('../../assets/dawn.png');
    console.log('22', bgCount);
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>

            <ScrollView style={{ flex: 1, width: '100%', marginVertical: 50, paddingVertical: 25 }}>
                <Button
                    onPress={() => {
                       setBgCount(bgCount + 1)
                        console.log(bgCount);
                    }}
                    title='Change BG' />
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
        flex: 1,



    }

})