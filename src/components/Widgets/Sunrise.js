import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WidgetStyle } from '../../../styles/theme.style';
import { BlurView } from 'expo-blur';

export default function Sunrise() {
    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <MaterialCommunityIcons size={18} name='weather-sunset' color={'#fff'} />
                    <Text style={styles.title}>Sunrise</Text>
                </View>
                <View style={{  flexDirection:'row', justifyContent:'center'}}>
                    <Text style={styles.details}>5:45 </Text>
                    <Text style={{fontSize:15, fontWeight:'700', lineHeight:18}}>PM</Text>
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