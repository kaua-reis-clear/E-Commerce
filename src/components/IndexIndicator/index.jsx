import React from 'react';
import { View } from 'react-native';
import style from './style';

export default function IndexIndicator({length, current}) {
  function getIndicatorItems() {
    return Array.from({length}).map((_,index) => {
      return (
        <View key={index} style={style.indicatorItem(current == index ? true : false)}/>
      );
    });
  }

  return (
    <View style={style.indicatorArea}>
      {getIndicatorItems()}
    </View>
  );
}