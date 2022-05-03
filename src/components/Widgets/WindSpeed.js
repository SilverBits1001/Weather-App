import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';
import { WeatherContext } from '../WeatherContextProvide';
export default function WindSpeed() {
  const weather = useContext(WeatherContext)
  const wind = Math.round(weather.currWeather.wind.speed)
  const degree = weather.currWeather.wind.deg

  function getCardinalDirection(angle) {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(angle / 45) % 8];
  }

  const direction = getCardinalDirection(degree)
  return (
    <View style={styles.container}>
      <BlurView style={styles.card} intensity={100} tint={'default'}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <MaterialCommunityIcons size={18} name='weather-hazy' color={'#fff'} />
          <Text style={styles.title}>Wind Speed</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.details}>{wind} mph</Text>
          <Text style={styles.title}>{direction}</Text>

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