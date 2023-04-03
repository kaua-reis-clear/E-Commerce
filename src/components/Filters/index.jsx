import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import style from './style';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { MotorolaLogo, SamsungLogo } from '../'

export default function Filters() {
  return (
    <ScrollView horizontal>
      <TouchableOpacity style={style.filterArea}>
        <MaterialCommunityIcons name="truck-delivery" size={50} color="white" />
        <Text style={style.text}>Frete Grátis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.filterArea}>
        <MaterialCommunityIcons name="home-map-marker" size={50} color="white" />
        <Text style={style.text}>Nacional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.filterArea}>
        <Ionicons name="earth" size={47} color="white" />
        <Text style={style.text}>Internacional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.filterArea}>
        <SamsungLogo width={50} height={50} color="white"/>
        <Text style={style.text}>Samsung</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.filterArea}>
        <MotorolaLogo width={50} height={50} color="white"/>
        <Text style={style.text}>Motorola</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}