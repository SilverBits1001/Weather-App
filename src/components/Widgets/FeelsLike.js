import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useContext} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';
import { WeatherContext } from '../WeatherContextProvide';

export default function FeelsLike() {
   const weather = useContext(WeatherContext)
   const feelsLike = Math.round(weather.currWeather.main.feels_like)
    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <MaterialCommunityIcons size={18} name='thermometer' color={'#fff'} />
                    <Text style={styles.title}>Feels Like</Text>
                </View>
                <Text style={styles.details}>{feelsLike}&#176;</Text>
            </BlurView >
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