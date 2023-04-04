import React, { useState, useRef } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filters, ScalableImage } from '../../components'
import style from './style'
import { Entypo } from '@expo/vector-icons';
import { products } from '../../mock/index'
import { getWidth, getHeight } from '../../utils';

export default function Home() {
  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100
  }

  const onViewableItemsChanged = ({viewableItems, changed}) => {
    console.log('visible: ', viewableItems);
    console.log('changed: ', changed);
  }

  const viewabilityConfigCallbackPairs = useRef([
    { onViewableItemsChanged },
  ]);
  
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
      keyExtractor={item => item.id}
      snapToAlignment='start'
      decelerationRate='fast'
      snapToInterval={getWidth(30, '-')}
      viewabilityConfig={viewabilityConfig}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
    </SafeAreaView>
  );
}
