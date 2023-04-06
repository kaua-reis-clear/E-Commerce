import React from 'react';
import { View, Text } from 'react-native';
import { Filters, Carousel, DiscountIcon } from '../../components'
import style from './style'
import { FontAwesome5 } from '@expo/vector-icons';
import { products } from '../../mock/index'
import { ScrollView } from 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Filters />
        <View style={style.titleArea}>
          <FontAwesome5 name="hotjar" size={30} color="white" />
          <Text style={style.title}>Em Alta</Text>
        </View>
        <Carousel data={products} navigation={navigation} style={style.carousel} />
        <View style={style.titleArea}>
          <DiscountIcon width={35} height={35} color="white"/>
          <Text style={style.title}>Promoções</Text>
        </View>
        <Carousel data={products} multi navigation={navigation} style={style.carousel} />
      </ScrollView>
    </View>
  );
}
