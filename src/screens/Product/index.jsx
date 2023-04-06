import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style';
import { Carousel, Stars, CartPlusIcon, DiscountIcon } from '../../components';
import { Ionicons, AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { toReal } from '../../utils';

export default function Product({route}) {
  const product = route.params.product;
  const [favorited, setFavorited] = useState(false);

  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel data={product.images} gallery style={style.carousel}>
          <TouchableOpacity style={style.share}>
            <Ionicons name='share-social' size={30} color='#090F2C' />
          </TouchableOpacity>
          <TouchableOpacity style={style.heart} onPress={() => setFavorited(current => !current)}>
            <AntDesign name={favorited ? 'heart' : 'hearto'} size={30} color='#090F2C' />
          </TouchableOpacity>
        </Carousel>
        <View style={style.content}>
          <View style={style.row(true)}>
            <Text style={style.sales}>{product.sales} vendidos</Text>
            <View style={style.row(false)}>
              <Stars length={5} rating={product.rating} size={20} color='#007AFF' />
              <Text style={style.rating}>{product.rating}</Text>
            </View>
          </View>
          <Text style={style.model}>{product.model}</Text>
          <View style={style.row(true)}>
            <View style={style.row(false)}>
              {product.oldPrice && (
                <DiscountIcon size={36} color='#007AFF' style={style.discountIcon}/>
              )}
              <Text style={style.price}>{toReal(product.price)}0</Text>
            </View>            
            {product.oldPrice && (
              <Text style={style.oldPrice}>{toReal(product.oldPrice)}</Text>
            )}
          </View>
          <Text style={style.installment}>em 12x {toReal(product.price / 12)} sem juros</Text>
          <View style={style.row(true, true)}>
            <View style={style.row(false, true)}>
              <MaterialCommunityIcons name={product.freeDelivery ? 'truck-check' : 'truck-delivery'} size={36} color={product.freeDelivery ? '#007AFF' : '#FFF'} />
              <Text style={style.delivery(product.freeDelivery)}>{product.freeDelivery ? 'Frete Grátis' : 'R$ 15,00 de frete'}</Text>
            </View>
            <Text style={style.deliveryTime}>Chega em 15 dias</Text>
          </View>
        </View>
      </ScrollView>
      <View style={style.footer}>
        <TouchableOpacity style={style.buyButton('#FFF')}>
          <CartPlusIcon size={35} color='#007AFF' />
          <Text style={style.buyText('#007AFF')}>ADICIONE AO CARRINHO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buyButton('#007AFF')}>
          <Feather name='shopping-bag' size={35} color='#FFF' />
          <Text style={style.buyText('#FFF')}>COMPRAR AGORA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}