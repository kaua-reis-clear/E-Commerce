import { createStackNavigator } from '@react-navigation/stack';
import { AuthenticatedScreens, ApplicationScreens } from './';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="AuthenticatedScreens" component={AuthenticatedScreens} />
      <Stack.Screen name="ApplicationScreens" component={ApplicationScreens} />
    </Stack.Navigator>
  );
}
