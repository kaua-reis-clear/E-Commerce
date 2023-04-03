import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const options = {

}

export default function AuthenticatedScreens() {
  return(
    <Tab.Navigator screenOptions={({route}) => ({
      headerStyle: {
        height: 90,
        backgroundColor: '#080808'
      },
      headerTitle: 'World Cell',
      headerTitleStyle: {
        color: 'white'
      },
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity>
          <AntDesign name='search1' size={29} color='white' />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        marginLeft: 15
      },
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign name='shoppingcart' size={30} color='white' />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 15
      },
      tabBarStyle: {
        height: 60,
        backgroundColor: '#080808'
      },
      tabBarIcon: ({focused}) => {
        let color = focused ? '#007AFF' : 'white';

        if (route.name === 'Home') {
          return (
            <TouchableOpacity>
              <AntDesign name='home' size={30} color={color} />
            </TouchableOpacity>
          )
        } else if (route.name === 'User') {
          return (
            <TouchableOpacity>
              <AntDesign name='user' size={30} color={color} />
            </TouchableOpacity>
          )
        }
      }
    })}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='User' component={Home}/>
    </Tab.Navigator>
  )
}