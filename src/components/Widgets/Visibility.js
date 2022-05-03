import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';
import { WeatherContext } from '../WeatherContextProvide';

export default function Visibility() {
    const weather = useContext(WeatherContext)
    const visibility = Math.round(((weather.currWeather.visibility) / 1000) * 10) / 10
    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <MaterialCommunityIcons size={18} name='eye' color={'#fff'} />
                    <Text style={styles.title}>Visibility</Text>
                </View>
                <Text style={styles.details}>{visibility} km</Text>
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