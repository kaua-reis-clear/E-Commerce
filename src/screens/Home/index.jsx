import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filters, ScalableImage } from '../../components'
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
      <FlatList
      style={style.carousel}
      horizontal
      data={products}
      renderItem={({item}) => <ScalableImage source={{uri: item.image}} width={getWidth(30, '-')}/>}
      />
    </SafeAreaView>
  );
}
