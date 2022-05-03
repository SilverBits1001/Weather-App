import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FeelsLike from './Widgets/FeelsLike'
import Humidity from './Widgets/Humidity'
import Wind from './Widgets/Wind'
import Visibility from './Widgets/Visibility'
import Pressure from './Widgets/Pressure'
import WindSpeed from './Widgets/WindSpeed'
import Sunrise from './Widgets/Sunrise'

export default function Widgets() {
    return (
        <View style={styles.container}>
            <FeelsLike />
            <Humidity />
            <Sunrise/>
            <Visibility />
            <Pressure />
            <WindSpeed />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 15,
        justifyContent: 'space-between',

    },
})