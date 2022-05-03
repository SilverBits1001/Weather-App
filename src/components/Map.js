import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import React, { useRef, useContext } from 'react'
import MapView, { UrlTile } from 'react-native-maps';
import { BlurView } from 'expo-blur'
import * as Location from 'expo-location';
import { WeatherContext } from './WeatherContextProvide';




export default function Map() {

    const weather = useContext(WeatherContext)


    const tileType = {
        temp: 'temp_new',
        wind: 'wind_new',
        clouds: 'clouds_new',
        precipitation: 'precipitation_new',
        pressure: 'pressure_new'
    }

    const mapRef = React.useRef()
    //console.log('maap', mapRef);
    return (
        <View style={styles.container}>
            <BlurView style={styles.card} intensity={100} tint={'default'}>
                <MapView
                    scrollEnabled={true}
                    region={{
                        "latitude": weather.location.coords.latitude,
                        "latitudeDelta": 0.15,
                        "longitude": weather.location.coords.longitude,
                        "longitudeDelta": 0.15,
                    }}
                  //  onRegionChange={(region) => console.log(region)}
                    ref={mapRef}
                    style={styles.map} >
                    <UrlTile
                        /**
                         * The url template of the tile server. The patterns {x} {y} {z} will be replaced at runtime
                         * For example, http://c.tile.openstreetmap.org/{z}/{x}/{y}.png
                         */

                        urlTemplate={`http://c.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                        /**
                         * The maximum zoom level for this tile overlay. Corresponds to the maximumZ setting in
                         * MKTileOverlay. iOS only.
                         */
                        maximumZ={19}
                        /**
                         * flipY allows tiles with inverted y coordinates (origin at bottom left of map)
                         * to be used. Its default value is false.
                         */
                        flipY={false}
                    />
                </MapView>
                <View style={{ flexDirection: 'row' }}>

                </View>
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