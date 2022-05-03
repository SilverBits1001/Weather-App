import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { WeatherContextProvider } from './src/components/WeatherContextProvide';
import TabNav from './src/components/TabNav';



export default function App() {
  return (
    <WeatherContextProvider>
      <TabNav />
    </WeatherContextProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
});
