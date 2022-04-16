import { StyleSheet, Text, View, Dimensions, Platform} from 'react-native'
import React, { useRef } from 'react'
import MapView from 'react-native-maps'
import { BlurView } from 'expo-blur'


export default function Map() {

    const mapRef = React.useRef()
    console.log(mapRef);
    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>
                <MapView
                    region={{
                        lattitude: '33.805',
                        longitude: '-118.3199',
                    }}
                    ref={mapRef} style={styles.map} />
            </BlurView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        overflow: 'hidden',
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(22, 22, 75, 0.95)'


    },
    map: {
        borderRadius: 13,
        height: 250,
        width: '100%'
    },
    card: {
        height: '100%',
        width: '100%',
        padding: 7,
    }

})