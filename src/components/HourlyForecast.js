import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { WeatherContext } from './WeatherContextProvide';



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


export default function HourlyForecast({searchedWeather}) {

    const weather = searchedWeather ? searchedWeather : useContext(WeatherContext);
    function setStandardTime(itemTime) {
        let time = new Date(itemTime * 1000).getHours()
        switch (true) {
            case (time === 0):
                time = 12
                return `${time} AM`
            case (time > 12):
                time = time - 12
                return `${time} PM`
            default:
                return `${time} AM`
        }
    }

    const renderItem = ({ item }) => {

        const time = setStandardTime(item.dt)

        const weatherDescription = item.weather[0].main
        return (
            <View style={styles.weatherItem}>
                <Text style={styles.time}>
                    {time}
                </Text>
                <MaterialCommunityIcons style={{ marginVertical: 5 }} size={24} name={conditionIcon[weatherDescription]} color={'#fff'} />
                <Text style={styles.temp}>
                    {Math.round(item.temp)}
                </Text>
            </View>
        )

    }

    return (
        <View style={styles.container}>
            <BlurView style={styles.card} tint={'default'} intensity={100}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                    <MaterialCommunityIcons style={{ marginHorizontal: 5 }} size={18} name='clock' color={'#fff'} />
                    <Text style={styles.description}>Hourly Forecast</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 1,
                        marginBottom: 10,

                    }}
                />
                <FlatList
                    data={weather.oneCall.hourly}
                    renderItem={renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                />

            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(22, 22, 75, 0.95)'

    },
    card: {
        paddingVertical: 10
    },

    weatherItem: {
        marginHorizontal: 20,
        alignItems: 'center',
    },
    time: {
        fontSize: 16,
        fontWeight: '400',

    },
    temp: {
        fontSize: 18,
        fontWeight: '500',

    },
    description: {
        padding: 5
    }
})