import React, { memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import style from './style';
import { Text, View } from 'react-native';

function CartPlusIcon({size, color}) {
  return (
    <View>
      <AntDesign name='shoppingcart' size={size} color={color} />
      <Text style={style.plus(size, color)}>+</Text>
    </View>
  )
}

export default memo(CartPlusIcon);