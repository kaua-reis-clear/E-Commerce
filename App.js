import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import MainNavigator from './src/routes/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
      <MainNavigator />
    </NavigationContainer>
  );
}
