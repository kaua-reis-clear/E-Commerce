import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Filters, ScalableImage, IndexIndicator } from '../../components'
import style from './style'
import { Entypo } from '@expo/vector-icons';
import { products } from '../../mock/index'
import { getWidth } from '../../utils';

export default function Home() {
  const [currents, setCurrents] = useState({
    releases: 0
  });

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100,
    minimumViewTime: 400
  }

  function onViewableItemsChanged({viewableItems, changed}) {
    let index = viewableItems[1] ? viewableItems[1].index : viewableItems[0].index;

    setCurrents(current => ({...current, releases: index}));
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
      <View style={style.carousel}>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({item}) => <ScalableImage source={{uri: item.image}} width={getWidth(30, '-')}/>}
        keyExtractor={item => item.id}
        snapToAlignment='start'
        decelerationRate='fast'
        snapToInterval={getWidth(30, '-')}
        viewabilityConfig={viewabilityConfig}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        />
        <IndexIndicator length={products.length} current={currents.releases}/>
      </View>
    </SafeAreaView>
  );
}
