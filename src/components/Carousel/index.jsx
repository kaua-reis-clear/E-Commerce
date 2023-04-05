import React, { useState, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import style from './style';
import { ScalableImage, IndexIndicator, Stars } from '../'
import { getWidth } from '../../utils';

export default function Carousel({multi, data}) {
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
          <TouchableOpacity style={style.productArea} activeOpacity={0.8}>
            <ScalableImage source={{ uri: item.image }} width={getWidth(multi ? 2 : 30, multi ? '/' : '-')} />
            <View style={style.productInfos(multi)}>
              <View style={style.row('start')}>
                <Text style={style.model(multi)}>{item.model}</Text>
                <Stars length={5} rating={item.rating} size={multi ? 13 : 21}/>
              </View>
              <View style={style.row('end')}>
                <Text style={style.price(multi)}>R$ {item.price.toFixed(2).toString().replace('.', ',')}</Text>
                <Text style={style.sales(multi)}>{item.sales} vendidos</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={multi ? <View style={style.separator}/> : null}
        snapToAlignment='start'
        decelerationRate={multi? 'normal' : 'fast'}
        snapToInterval={multi ? null: getWidth(30, '-')}
        viewabilityConfig={multi ? null : viewabilityConfig}
        viewabilityConfigCallbackPairs={multi ? null : viewabilityConfigCallbackPairs.current}
      />
      {!multi && (
        <IndexIndicator length={data.length} current={currents.releases} />
      )}
    </View>
  );
}

