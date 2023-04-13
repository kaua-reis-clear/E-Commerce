import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import HomeTab from './Tabs/HomeTab';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function AuthenticatedScreens() {
  return(
    <Tab.Navigator screenOptions={({navigation, route}) => ({
      headerShown: false,
      tabBarStyle: {
        height: 65,
        backgroundColor: '#080808',
        display: getFocusedRouteNameFromRoute(route) === 'Product' ? 'none' : 'flex'
      },
      tabBarIcon: ({focused}) => {
        let color = focused ? '#007AFF' : 'white';

        if (route.name === 'HomeTab') {
          return (
            <TouchableOpacity>
              <AntDesign name='home' size={40} color={color} />
            </TouchableOpacity>
          )
        } else if (route.name === 'UserTab') {
          return (
            <TouchableOpacity>
              <AntDesign name='user' size={40} color={color} />
            </TouchableOpacity>
          )
        }
      },
      tabBarShowLabel: false
    })}>
      <Tab.Screen name='HomeTab' component={HomeTab}/>
      <Tab.Screen name='UserTab' component={HomeTab}/>
    </Tab.Navigator>
  )
}