import 'react-native-gesture-handler';
import MainNavigator from './src/routes/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ECommerceProvider } from './src/contexts';
import { StatusBar } from 'expo-status-bar';
import CartProvider from './src/contexts/CartContext';

export default function App() {
  return (
    <ECommerceProvider>
      <CartProvider>
        <NavigationContainer>
          <StatusBar style='auto'/>
          <MainNavigator />
        </NavigationContainer>
      </CartProvider>
    </ECommerceProvider>
  );
}
