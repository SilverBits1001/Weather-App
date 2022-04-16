import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';

const Compass = () => {
    const deg = '90deg'

    return (
        <View style={{ borderRadius: 15, alignItems: 'center' }}>



            <View style={{ backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center', borderRadius: 100 / 2, width: 100, height: 100, borderStyle: 'dotted', borderWidth: 3 }}>
            <Text style={{ position: 'absolute', zIndex: 1, top: 0, fontSize: 16, fontWeight: '800' }}>N</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', transform: [{ rotate: `${deg}` }] }}>
                    <Ionicons style={{ position: 'absolute', top: -10 }} name='caret-up-outline' size={30} color="#d11" />
                </View>
            </View>
        </View >
    )
}

export default function Wind() {
    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>
                <View style={{ alignSelf: 'flex-start', flexDirection: 'row', marginBottom: 5 }}>
                    <MaterialCommunityIcons size={18} name='weather-windy' color={'#fff'} />
                    <Text style={styles.title}>Wind</Text>
                </View>
                {/*             <Text style={styles.details}>10 mph</Text>*/}
                <Compass />
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
    logo: {
        width: 109,
        height: 109,
    },
    card: WidgetStyle.WIDGET_CARD
})