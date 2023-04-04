import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filters, ScalableImage, IndexIndicator, Carousel } from '../../components'
import style from './style'
import { Entypo } from '@expo/vector-icons';
import { products } from '../../mock/index'
import { getWidth } from '../../utils';

export default function Home() {
  return (
    <SafeAreaView style={style.container}>
      <Filters />
      <View style={style.titleArea}>
        <Entypo name="new" size={30} color="white" />
        <Text style={style.title}>Lançamentos</Text>
      </View>
      <Carousel data={products}/>
    </SafeAreaView>
  );
}
