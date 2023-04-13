import React, { memo } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import style from './style';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { MotorolaLogo, SamsungLogo } from '../'

function Filters() {
  return (
    <View style={style.filtersArea}>
      <ScrollView horizontal>
        <TouchableOpacity activeOpacity={0.8} style={style.filterArea(false)}>
          <MaterialCommunityIcons name='truck-check' size={50} color='#FFF' />
          <Text style={style.text}>Frete Grátis</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={style.filterArea(false)}>
          <MaterialCommunityIcons name='home-map-marker' size={50} color='#FFF' />
          <Text style={style.text}>Nacional</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={style.filterArea(false)}>
          <Ionicons name='earth' size={47} color='white' />
          <Text style={style.text}>Internacional</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={style.filterArea(false)}>
        <AntDesign name='apple1' size={50} color='white' />
          <Text style={style.text}>Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={style.filterArea(false)}>
          <SamsungLogo size={50} color='white'/>
          <Text style={style.text}>Samsung</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={style.filterArea(true)}>
          <MotorolaLogo size={50} color='white'/>
          <Text style={style.text}>Motorola</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default memo(Filters);