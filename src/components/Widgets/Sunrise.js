import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';
import { WeatherContext } from '../WeatherContextProvide';

export default function Sunrise() {
    const weather = useContext(WeatherContext)
    const sunrise = weather.currWeather.sys.sunrise

    function setStandardTime(itemTime) {
        let time = new Date(itemTime * 1000).toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
        })
        
        return time
    }
    const sunset = setStandardTime(weather.currWeather.sys.sunset)
    const sunTime = [sunrise, sunset]
    
    function dayCheck(time){
        
    }


    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <MaterialCommunityIcons size={18} name='weather-sunset' color={'#fff'} />
                    <Text style={styles.title}>Sunrise</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={styles.details}>{sunTime[1].slice(0,5)}</Text>
                    <Text style={{ fontSize: 15, fontWeight: '700', lineHeight: 18 }}>{sunTime[1].slice(-2)}</Text>
                </View>
            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: WidgetStyle.WIDGET_CONTAINER,
    details: {
        fontSize: WidgetStyle.DETAILS_SIZE,
        fontWeight: WidgetStyle.DETAILS_WEIGHT
    },
    title: {
        fontSize: WidgetStyle.TITLE_SIZE,
        fontWeight: WidgetStyle.TITLE_WEIGHT,
        marginHorizontal: 5,
        color: WidgetStyle.TITLE_COLOR
    },
    card: WidgetStyle.WIDGET_CARD
})