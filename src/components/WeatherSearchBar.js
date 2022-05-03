import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, ActivityIndicator, FlatList, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import React, { useState, useEffect, useContext, useRef } from 'react'
import { SearchBar } from '@rneui/themed';
import { WeatherContext } from './WeatherContextProvide';
import { BlurView } from 'expo-blur';
import themeStyle from '../../styles/theme.style';
const url = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

export default function WeatherSearchBar({ navigation }) {

    const [search, setSearch] = useState(null)
    const [searchResult, setSearchResult] = useState([])
    const [weatherResults, setWeatherResults] = useState([])
    const [oneCallResults, setOneCallResults] = useState([])


    const searchRef = useRef(null)

    useEffect(() => {
        return () => {

        }
    }, [searchResult])


    const updateSearch = (search) => {
        setSearch(search);
    };

    const axios = require('axios');
    async function fetchWeather(fetchType) {
        //   const weatherUrl = `https://rn-weather-fetch.herokuapp.com/weather/${fetchType}/${location.coords.latitude}/${location.coords.longitude}`
        const cityUrl = `https://rn-weather-fetch.herokuapp.com/search/${search}`
        try {
            const response = await axios.get(cityUrl, {})
            isNaN(search) ? setSearchResult(response.data) : setSearchResult([response.data])
            // console.log(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    async function fetchSearchedWeather(result) {
        // console.log('searccch', result)
        const lon = result.lon
        const lat = result.lat
        const weatherUrl = `https://rn-weather-fetch.herokuapp.com/weather/weather/${lat}/${lon}`
        const oneCallUrl = `https://rn-weather-fetch.herokuapp.com/weather/onecall/${lat}/${lon}`
        try {
            const response = await axios.get(weatherUrl, {})
            setWeatherResults(prev => [...prev, response.data])
        } catch (error) {
            console.error(error)
        }
        try {
            const response = await axios.get(oneCallUrl, {})
            setOneCallResults(prev => [...prev, response.data])
        } catch (error) {
            console.error(error)
        }
    }
    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Searched', {
                    weather: item,
                    oneCall: oneCallResults[index],
                    location: searchResult[index]
                })}
                style={{ flex: 1, backgroundColor: 'rgba(200,200,250, 0.5)', overflow: 'hidden', borderRadius: 20, marginVertical: 7, marginHorizontal: 5 }}>
                <BlurView style={styles.resultCard}>
                    <View style={{ flexDirection: 'column', flex: 4, }}>
                        <Text style={styles.resultName}>{searchResult[index].name}</Text>
                        <Text style={styles.resultName}>{weatherResults[index].name}</Text>

                        <Text style={[styles.resultName, { color: 'rgba(225,225,250, .8)', fontSize: themeStyle.FONT_SIZE_MEDIUM, fontWeight: themeStyle.FONT_WEIGHT_MEDIUM }]}>
                            {searchResult[index].state}</Text>
                    </View>
                    <Text style={styles.resultTemp}>{Math.round(item.main.temp)}&#176;F</Text>
                </BlurView>
            </TouchableOpacity>
        )
    }
    oneCallResults.length > 0 ? console.log('3333', weatherResults, '//////', searchResult) : null
    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                ref={searchRef}
                placeholder="Search for a city"
                onChangeText={updateSearch}
                value={search}
                round={true}
                lightTheme={true}
                onSubmitEditing={() => {
                    setSearchResult([])
                    setWeatherResults([])
                    setOneCallResults([])
                    fetchWeather(search)
                    searchResult.map(result => fetchSearchedWeather(result))
                }}
                inputContainerStyle={{ backgroundColor: 'white' }}
                containerStyle={{
                    marginHorizontal: 10,
                    backgroundColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent'
                }}
            />
            {weatherResults.length > 0 && searchResult.length > 0 ?
                <FlatList
                    data={weatherResults}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    extraData={weatherResults}
                /> : null}

        </View>





    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    resultCard: {
        paddingHorizontal: 20,
        height: 100,
        flexDirection:
            'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    resultName: {

        color: 'white',
        fontSize: 24,
    },
    resultTemp: {
        flex: 1,
        fontSize: themeStyle.FONT_SIZE_LARGE,
        color: 'white',
        margin: 10
    }

})