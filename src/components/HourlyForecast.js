import { StyleSheet, Text, View, FlatList, Platform } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';



const hourly = [
    {
        time: '5PM',
        icon: 'weather-sunny',
        temp: '60'
    },
    {
        time: '5PM',
        icon: 'weather-cloudy',
        temp: '60'
    },
    {
        time: '5PM',
        icon: 'weather-rainy',
        temp: '60'
    },
    {
        time: '5PM',
        icon: 'weather-sunny',
        temp: '60'
    },
    {
        time: '5PM',
        icon: 'weather-cloudy',
        temp: '60'
    },
    {
        time: 'Time',
        icon: 'weather-rainy',
        temp: '60'
    },
    {
        time: 'Time',
        icon: 'weather-sunny',
        temp: '60'
    },
    {
        time: 'Time',
        icon: 'weather-cloudy',
        temp: '60'
    },
    {
        time: 'Time',
        icon: 'weather-rainy',
        temp: '60'
    },

]


export default function HourlyForecast() {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.weatherItem}>
                <Text style={styles.time}>
                    {item.time}
                </Text>
                <MaterialCommunityIcons style={{ marginVertical: 5 }} size={24} name={item.icon} color={'#fff'} />
                <Text style={styles.temp}>
                    {item.temp}
                </Text>
            </View>
        )

    }

    return (
        <View style={styles.container}>
            <BlurView style={styles.card} tint={'default'} intensity={100}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                    <MaterialCommunityIcons size={18} name='clock' color={'#fff'} />
                    <Text style={styles.description}>Rainy conditions from 5PM-7PM, with scattered thunderstorms excpected at 6PM.</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: '#ddd',
                        borderBottomWidth: 1,
                        margin: 15,

                    }}
                />
                <FlatList
                    data={hourly}
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
    card:{
        paddingVertical:10
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
    description:{
      padding:5
    }
})