import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { WeatherContext } from './WeatherContextProvide';
import { SearchedWeatherContext } from './SearchedContextProvider';

const conditionIcon = {
    Clouds: 'weather-cloudy',
    Clear: 'weather-sunny',
    Tornado: 'weather-tornado',
    Squall: 'weather-windy',
    Ash: 'weather-fog',
    Dust: 'weather-fog',
    Sand: 'weather-fog',
    Fog: 'weather-fog',
    Haze: 'weather-fog',
    Smoke: 'weather-fog',
    Mist: 'weather-fog',
    Snow: 'weather-snowy',
    Rain: 'weather-rainy',
    Drizzle: 'weather-rainy',
    Thunderstorm: 'weather-lightning',

}




export default function WeekForecast({ currWeather, searched,  }) {
    const weather = searched ? useContext(SearchedWeatherContext) : useContext(WeatherContext);
//console.log(searched);
    const RenderWeek = () => {
        const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const sevenDay = weather.oneCall.daily.slice(0, 7)
        return sevenDay.map((item, index,) => {
            const day = new Date(item.dt * 1000).getDay()
            const weatherIcon = item.weather[0].main
            const max = Math.round(item.temp.max)
            const min = Math.round(item.temp.min)

            return (
                <View key={index}>
                    <View
                        style={{
                            borderBottomColor: '#ddd',
                            borderBottomWidth: 1,
                        }} />
                    <View style={{ marginVertical: 15, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={styles.text}>{weekday[day]}</Text>
                        <MaterialCommunityIcons style={{ flex: 1, justifyContent: 'center' }} size={24} name={conditionIcon[weatherIcon]} color={'#fff'} />
                        <Text style={[styles.text, { color: '#eee' }]}>{min}</Text>
                        <View>
                            <Text style={[styles.text, {}]}>{max}</Text>

                        </View>
                    </View>
                </View>
            )
        }
        )
    }



    return (
        <View style={styles.container}>
            <BlurView style={styles.card} tint={'default'} intensity={100}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
                    <MaterialCommunityIcons style={{ marginHorizontal: 5 }} size={18} name='calendar' color={'#fff'} />
                    <Text>7-Day Forecast</Text>
                </View>
                <RenderWeek />
            </BlurView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(22, 22, 75, 0.95)'


    },
    card: {
        padding: 15,

    },
    text: {
        fontSize: 22,
        fontWeight: '500',
        flex: 1,
    }
})