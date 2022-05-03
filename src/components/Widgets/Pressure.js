import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';
import { WeatherContext } from '../WeatherContextProvide';

export default function Pressure() {
    const weather = useContext(WeatherContext)
    const pressure = weather.currWeather.main.pressure
    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <MaterialCommunityIcons size={18} name='gauge' color={'#fff'} />
                    <Text style={styles.title}>Pressure</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.details}>{pressure}</Text>
                    <Text style={styles.title}>hPa</Text>
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