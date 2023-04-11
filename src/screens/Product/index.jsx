import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import style from './style';
import { Carousel, Stars, CartPlusIcon, DiscountIcon, FullscreenModal, ScalableImage } from '../../components';
import { Ionicons, AntDesign, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { getWidth, toReal } from '../../utils';
import { ECommerceContext } from '../../contexts/StoreContext';
import { sellers } from '../../mock';

export default function Product({route}) {
  const product = route.params.product;
  const seller = sellers.find(seller => seller.id == product.sellerId);
  const [favorited, setFavorited] = useState(false);
  const [image, setImage] = useState(null);
  const { fullscreen, setFullscreen } = useContext(ECommerceContext)

  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel data={product.images} gallery style={style.carousel} setFullscreen={setFullscreen} setImage={setImage}>
          <TouchableOpacity style={style.share}>
            <Ionicons name='share-social' size={30} color='#090F2C' />
          </TouchableOpacity>
          <TouchableOpacity style={style.heart} onPress={() => setFavorited(current => !current)}>
            <AntDesign name={favorited ? 'heart' : 'hearto'} size={30} color='#090F2C' />
          </TouchableOpacity>
        </Carousel>
        <View style={style.content}>
          <View style={style.row(true)}>
            <View style={style.row(false, true)}>
              <MaterialCommunityIcons name='package-variant' size={24} color='#007AFF' />
              <Text style={style.sales}>{product.sales} vendidos</Text>
            </View>
            <View style={style.row(false)}>
              <Stars length={5} rating={product.rating} size={20} color='#007AFF' />
              <Text style={style.rating}>{product.rating.toFixed(1)}</Text>
            </View>
          </View>
          <Text style={style.model}>{product.model}</Text>
          <View style={style.row(true)}>
            <View style={style.row(false)}>
              {product.oldPrice && (
                <DiscountIcon size={33} color='#007AFF' style={style.discountIcon}/>
              )}
              <Text style={style.price}>{toReal(product.price)}0</Text>
            </View>            
            {product.oldPrice && (
              <Text style={style.oldPrice}>{toReal(product.oldPrice)}</Text>
            )}
          </View>
          <Text style={style.installment}>em 12x {toReal(product.price / 12)} sem juros</Text>
          <View style={[style.row(false, true), ]}>
              <MaterialCommunityIcons name={product.freeDelivery ? 'truck-check' : 'truck-delivery'} size={35} color={product.freeDelivery ? '#007AFF' : '#FFF'} />
              <Text style={style.delivery(product.freeDelivery)}>{product.freeDelivery ? 'Frete Grátis' : 'R$ 15,00 de frete'}</Text>
            </View>
          <TouchableOpacity style={[style.row(false, true), style.sellerArea]} activeOpacity={0.6}>
            <ScalableImage source={{uri: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png'}} width={60} style={style.sellerImage}/>
            <View style={style.sellerInfos}>
              <Text style={style.sellerName}>My Cell</Text>
              <View style={style.row(true, false)}>
                <View style={style.row(true, false)}>
                <MaterialCommunityIcons name='package-variant' size={getWidth(22, '/')} color='#007AFF' />
                  <Text style={style.sellerTotalSales}>{seller.totalSales} vendas</Text>
                </View>
                <View style={style.row(true, false)}>
                  <Stars length={5} rating={4.7} size={getWidth(26, '/')} color='#007AFF'/>
                  <Text style={style.sellerRating}>{seller.rating}</Text>
                </View>
                <View style={style.row(true, false)}>
                  <Ionicons name='location-sharp' size={getWidth(22, '/')} color='#007AFF' />
                  <Text style={style.sellerLocation}>{seller.location}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
      {fullscreen && (
        <FullscreenModal image={image}/>
      )}
    </View>
  );
}