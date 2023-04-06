import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Home, Product, Cart } from '../../../screens'
import { TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'

export default function HomeTab() {
  const Stack = createStackNavigator()
  
  return (
    <Stack.Navigator screenOptions={({route, navigation}) => ({
      headerStyle: {
        height: 95,
        backgroundColor: '#080808'
      },
      headerTransparent: route.name === 'Product' ? true : false,
      headerTitle: 'WORLD CELL',
      headerTitleStyle: {
        color: route.name === 'Product' ? '#090F2C' : '#FFF',
        fontSize: 23,
        fontWeight: 'bold'
      },
      headerTitleAlign: 'center',
      headerLeft: () => route.name === 'Home' ? (
        <TouchableOpacity>
          <AntDesign name='search1' size={38} color='white' />
        </TouchableOpacity>
      ) : route.name === 'Product' ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={38} color={route.name === 'Product'? '#090F2C' : '#FFF'} />
        </TouchableOpacity>
      ) : null,
      headerLeftContainerStyle: {
        marginLeft: 15
      },
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate({ name: 'Cart' })}>
          <AntDesign name='shoppingcart' size={40} color={route.name === 'Product'? '#090F2C' : '#FFF'} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 15
      },
      headerMode:'float',
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
    })}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Product' component={Product}/>
      <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}