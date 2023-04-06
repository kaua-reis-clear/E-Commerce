import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style';
import { Carousel } from '../../components';

export default function Product({route}) {
  const product = route.params.product;

  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel data={product.images} gallery style={style.carousel}>
          <View style={style.row}>
            <TouchableOpacity>

            </TouchableOpacity>
          </View>
        </Carousel>
        <View style={style.content}>
          <Text style={style.model}>{product.model}</Text>
        </View>
      </ScrollView>
    </View>
  );
}