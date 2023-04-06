import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import style from './style';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { MotorolaLogo, SamsungLogo } from '../'

export default function Filters() {
  return (
    <View style={style.filtersArea}>
      <ScrollView horizontal>
        <TouchableOpacity style={style.filterArea(false)}>
          <MaterialCommunityIcons name='truck-check' size={50} color='#FFF' />
          <Text style={style.text}>Frete Grátis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterArea(false)}>
          <MaterialCommunityIcons name='home-map-marker' size={50} color='#FFF' />
          <Text style={style.text}>Nacional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterArea(false)}>
          <Ionicons name='earth' size={47} color='white' />
          <Text style={style.text}>Internacional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterArea(false)}>
        <AntDesign name='apple1' size={50} color='white' />
          <Text style={style.text}>Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterArea(false)}>
          <SamsungLogo size={50} color='white'/>
          <Text style={style.text}>Samsung</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.filterArea(true)}>
          <MotorolaLogo size={50} color='white'/>
          <Text style={style.text}>Motorola</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}