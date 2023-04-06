import React, { useState, useRef, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import style from './style';
import { ScalableImage, IndexIndicator, Stars } from '../'
import { getWidth, toReal } from '../../utils';

export default function Carousel({navigation, multi, data, gallery, ...props}) {
  const [current, setCurrent] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  }

  function onViewableItemsChanged({viewableItems}) {
    let index = viewableItems[1] ? viewableItems[1].index : viewableItems[0].index;

    setCurrent(index);
  }

  const viewabilityConfigCallbackPairs = useRef([{
      viewabilityConfig,
      onViewableItemsChanged,
    },
  ]);

  return (
    <View style={style.carousel(gallery)} {...props.style}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={style.productArea} activeOpacity={0.8} onPress={() => gallery ? null : navigation.navigate('Product', {product: item})}>
            <ScalableImage source={{ uri: gallery ? item : item.images[0] }} width={gallery ? getWidth() : getWidth(multi ? 2 : 30, multi ? '/' : '-')} />
            {!gallery && (
              <View style={style.productInfos(multi)}>
                <View style={style.row('start')}>
                  <Text style={style.model(multi)}>{item.model}</Text>
                  <Stars length={5} rating={item.rating} size={multi ? 13 : 21} color='#007AFF'/>
                </View>
                <View style={style.row('end')}>
                  <Text style={style.price(multi)}>{toReal(item.price)}</Text>
                  <Text style={style.sales(multi)}>{item.sales} vendidos</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={multi ? <View style={style.separator}/> : null}
        snapToAlignment='center'
        decelerationRate={multi? 'normal' : 'fast'}
        snapToInterval={multi ? null: gallery ? getWidth() : getWidth(30, '-')}
        viewabilityConfigCallbackPairs={multi ? null : viewabilityConfigCallbackPairs.current}
      />
      {!multi && (
        <IndexIndicator length={data.length} current={current} style={style.indexIndicator(gallery)}/>
      )}
      {props.children}
    </View>
  );
}

