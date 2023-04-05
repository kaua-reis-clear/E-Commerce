import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Home, Cart } from '../../../screens'
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function HomeTab() {
  const Stack = createStackNavigator()
  
  return (
    <Stack.Navigator screenOptions={({navigation}) => ({
      gestureEnabled: true,
      gestureDirection: 'vertical',
      headerStyle: {
        height: 95,
        backgroundColor: '#080808'
      },
      headerTitle: 'World Cell',
      headerTitleStyle: {
        color: 'white'
      },
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity>
          <AntDesign name='search1' size={38} color='white' />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        marginLeft: 15
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate({ name: 'Cart' })}>
          <AntDesign name='shoppingcart' size={40} color='white' />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 15
      },
      headerMode:'float',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
    })}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}