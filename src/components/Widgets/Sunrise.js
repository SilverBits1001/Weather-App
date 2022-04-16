import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

export default function Sunrise() {
    return (
        <View style={styles.container}>

            <Text>Sunrise</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingVertical: 15,
        backgroundColor: '#bbb',
        borderRadius: 15,
        marginVertical:5

    },
})