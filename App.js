import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CurrentLocation from './src/components/CurrentWeatherCard';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>

      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
});
