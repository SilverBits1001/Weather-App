import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';


const weeklyForecast = [
    {
        day: 'Fri',
        icon: 'weather-rainy',
        tempLow: '56',
        tempHigh: '85'
    },
    {
        day: 'Fri',
        icon: 'weather-rainy',
        tempLow: '56',
        tempHigh: '85'
    },
    {
        day: 'Fri',
        icon: 'weather-rainy',
        tempLow: '56',
        tempHigh: '85'
    },
    {
        day: 'Fri',
        icon: 'weather-rainy',
        tempLow: '56',
        tempHigh: '85'
    },
    {
        day: 'Fri',
        icon: 'weather-rainy',
        tempLow: '56',
        tempHigh: '85'
    },
    {
        day: 'Fri',
        icon: 'weather-rainy',
        tempLow: '56',
        tempHigh: '85'
    },
    {
        day: 'Fri',
        icon: 'weather-rainy',
        tempLow: '56',
        tempHigh: '85'
    }
]

export default function WeekForecast() {

    const RenderWeek = () => {
        return weeklyForecast.map((item, index) =>
            <View key={index}>
                <View
                    style={{
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 1,

                    }} />
                <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.text}>{item.day}</Text>
                    <MaterialCommunityIcons size={24} name={item.icon} color={'#fff'} />
                    <Text style={[styles.text, { color: '#eee' }]}>{item.tempLow}</Text>
                    <Text style={styles.text}>{item.tempHigh}</Text>
                </View>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <Text>Hello world</Text>
        )
    }

    return (
        <View style={styles.container}>
            <BlurView style={styles.card} tint={'default'} intensity={100}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7 }}>
                    <MaterialCommunityIcons size={18} name='calendar' color={'#fff'} />
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
        fontWeight: '500'
    }
})