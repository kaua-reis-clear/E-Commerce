import React from 'react';
import { View, Text } from 'react-native';
import style from './style';
import { Carousel, ScalableImage } from '../../components';

export default function Product({route}) {
  const product = route.params.product;

  return (
    <View style={style.container}>
      <Carousel data={product.images} gallery/>
      <View style={style.content}>
        <Text style={style.model}>{product.model}</Text>
      </View>
    </View>
  );
}