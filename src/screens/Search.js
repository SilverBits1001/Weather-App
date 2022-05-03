import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, ActivityIndicator } from 'react-native'
import React, { useState, useEffect, useContext, useRef} from 'react'
import CurrentWeatherCard from '../components/CurrentWeatherCard'
import HourlyForecast from '../components/HourlyForecast'
import WeekForecast from '../components/WeekForecast'
import Map from '../components/Map'
import AirQuality from '../components/Widgets/WindSpeed'
import Sunrise from '../components/Widgets/Sunrise'
import Widgets from '../components/Widgets'
import { WeatherContext } from '../components/WeatherContextProvide'
import { SearchBar } from '@rneui/themed';
import WeatherSearchBar from '../components/WeatherSearchBar'

const url = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'

export default function Search({navigation}) {

    const [bgCount, setBgCount] = useState(0)
    const bg = ['dawn', 'afternoon', 'evening', 'night']
    let image = require('../../assets/evening.png');

    const [search, setSearch] = useState(null)
    const weather = useContext(WeatherContext);
    const searchRef = useRef(null)
    
    const updateSearch = (search) => {
        setSearch(search);
      };

      const axios = require('axios');
      async function fetchWeather(fetchType) {
          const ApiUrl = `https://rn-weather-fetch.herokuapp.com/weather/${fetchType}/33.78854943134751/-118.31770488679959`
  
          try {
              const response = await axios.get(ApiUrl, {})
              switch (fetchType) {
                  case 'weather':
                      setWeather(response.data)
                      break;
                  case 'onecall':
                      setOneCall(response.data)
                      break;
                  default:
                      console.log(`Bad api call at ${fetchType}`);
              }
              setLoaded(true)
  
          } catch (error) {
              console.error(error)
              setLoaded(false)
          }
      }

    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.container}>

            <View style={{ flex: 1, width: '100%', marginVertical: 50, paddingVertical: 25 }}>
                <WeatherSearchBar navigation={navigation}/>
                <Text>{search}</Text>
            </View>
        </ImageBackground>





    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'



    }

})