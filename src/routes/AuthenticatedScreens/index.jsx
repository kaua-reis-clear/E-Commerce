import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTab } from './Tabs';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function AuthenticatedScreens() {
  return(
    <Tab.Navigator screenOptions={({navigation, route}) => ({
      headerShown: false,
      tabBarStyle: {
        height: 65,
        backgroundColor: '#080808'
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