import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';
export default function AirQuality() {
  return (
    <View style={styles.container}>
      <BlurView style={styles.card} intensity={100} tint={'default'}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <MaterialCommunityIcons size={18} name='weather-hazy' color={'#fff'} />
          <Text style={styles.title}>AirQuality</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.details}>33</Text>
          <Text style={{}}>Good</Text>

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