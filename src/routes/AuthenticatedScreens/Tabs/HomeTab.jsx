import React, { useContext } from 'react';
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Home, Product, Cart } from '../../../screens'
import { TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons'
import * as NavigationBar from 'expo-navigation-bar';
import { ECommerceContext } from '../../../contexts/StoreContext';

export default function HomeTab() {
  const Stack = createStackNavigator();
  const { fullscreen, setFullscreen } = useContext(ECommerceContext)
  
  return (
    <Stack.Navigator screenOptions={({route, navigation}) => {
      NavigationBar.setBackgroundColorAsync(route.name === 'Product' ? fullscreen ? '#080808' : '#090F2C' : '#080808');
      return ({
        headerStyle: {
          height: 95,
          backgroundColor: '#080808',
          shadowColor: 'transparent'
        },
        headerTransparent: route.name === 'Product' ? fullscreen ? false : true : false,
        headerTitle: 'WORLD CELL',
        headerTitleStyle: {
          color: route.name === 'Product' ? '#090F2C' : '#FFF',
          fontSize: 23,
          fontWeight: 'bold',
          display: fullscreen ? 'none' : 'flex'
        },
        headerTitleAlign: 'center',
        headerLeft: () => route.name === 'Home' ? (
          <TouchableOpacity>
            <AntDesign name='search1' size={38} color='white' />
          </TouchableOpacity>
        ) : route.name === 'Product' ? (
          <TouchableOpacity onPress={() => fullscreen ? setFullscreen(false) : navigation.goBack()}>
            <Ionicons name={fullscreen ? 'close' : 'arrow-back'} size={38} color={fullscreen ? '#FFF' : '#090F2C'} />
          </TouchableOpacity>
        ) : null,
        headerLeftContainerStyle: {
          marginLeft: 15
        },
        headerRight: () => !fullscreen && (
          <TouchableOpacity onPress={() => navigation.navigate({ name: 'Cart' })}>
            <AntDesign name='shoppingcart' size={40} color={route.name === 'Product'? '#090F2C' : '#FFF'} />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: {
          marginRight: 15
        },
        headerMode:'float',
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      })
    }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Product' component={Product}/>
      <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}