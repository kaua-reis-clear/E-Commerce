import React, { useState, useRef } from 'react';
import { View, FlatList } from 'react-native';
import style from './style';
import { ScalableImage, IndexIndicator } from '../'
import { getWidth } from '../../utils';

export default function Carousel({data}) {
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
    <View style={style.carousel}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <ScalableImage source={{ uri: item.image }} width={getWidth(30, '-')} />
        )}
        keyExtractor={(item) => item.id}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={getWidth(30, '-')}
        viewabilityConfig={viewabilityConfig}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <IndexIndicator length={data.length} current={currents.releases} />
    </View>
  );
}

