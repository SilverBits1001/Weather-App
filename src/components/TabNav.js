import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import { BlurView } from 'expo-blur';
import SearchedLocation from '../screens/SearchedLocation';

const Tab = createBottomTabNavigator();



export default function TabNav({ children }) {

  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, backgroundColor: 'transparent', height: 150 }}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (

    <NavigationContainer>
      <Tab.Navigator

        initialRouteName="Search"
        screenOptions={({ route }) => ({
          tabBarBackground: () =>
            <View style={{ flex: 1, }}>
              <BlurView style={{
                flex: 1,
                backgroundColor: 'rgba(200,200,250, 0.5)',
                borderRadius: 30,
                overflow: 'hidden'
              }} intensity={100} />
            </View>,
          tabBarStyle: {
            backgroundColor: 'transparent',
            position: 'absolute',
            height: 60,
            left: 0,
            right: 0,
            bottom: 0,
            elevation: 0,
            borderTopWidth: 0,

          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'location' : 'location-outline'
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Searched" component={SearchedLocation} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({})