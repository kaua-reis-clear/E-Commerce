import 'react-native-gesture-handler';
import MainNavigator from './src/routes/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import ECommerceProvider from './src/contexts/StoreContext'; 
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <ECommerceProvider>
      <NavigationContainer>
        <StatusBar style='auto'/>
        <MainNavigator />
      </NavigationContainer>
    </ECommerceProvider>
  );
}
