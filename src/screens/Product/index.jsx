import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Animated } from 'react-native';
import style from './style';
import { Carousel, Stars, CartPlusIcon, DiscountIcon, FullscreenModal, ScalableImage, BottomSheet } from '../../components';
import { Ionicons, AntDesign, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { getWidth, toReal } from '../../utils';
import { ECommerceContext } from '../../contexts/StoreContext';
import { sellers, productDetails } from '../../mock';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Product({route}) {
  const product = route.params.product;
  const seller = sellers.find(seller => seller.id == product.sellerId);
  const [favorited, setFavorited] = useState(false);
  const [image, setImage] = useState(null);
  const { fullscreen, setFullscreen } = useContext(ECommerceContext);
  const [show, setShow] = useState(false);

  function getDetails() {
    let productDetail = productDetails.find(productDetail => productDetail.productId == product.id);

    return productDetail.details.map((detail, index) => (
      <View style={style.detailSection} key={index}>
        <Text style={style.detailTitle}>{detail.title}</Text>
        {detail.infos.map((info, index) => (
          <View style={[style.row('space-between'), style.detailRow]} key={index}>
            <Text style={style.detailInfo}>{info.field}</Text>
            <Text style={style.detailInfo}>{info.info}</Text>
          </View>
        ))}
     </View>
    ))
  }

  return (
    <GestureHandlerRootView style={style.container}>
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
            <View style={style.row('space-between')}>
              <View style={style.row('flex-start', 'center')}>
                <MaterialCommunityIcons name='package-variant' size={24} color='#007AFF' />
                <Text style={style.sales}>{product.sales} vendidos</Text>
              </View>
              <View style={style.row('space-between')}>
                <Stars length={5} rating={product.rating} size={20} color='#007AFF' />
                <Text style={style.ratingValue}>{product.rating.toFixed(1)}</Text>
              </View>
            </View>
            <Text style={style.model}>{product.model}</Text>
            <View style={style.row('space-between')}>
              <View style={style.row('flex-start')}>
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
            <View style={[style.row('flex-start', 'center'), ]}>
                <MaterialCommunityIcons name={product.freeDelivery ? 'truck-check' : 'truck-delivery'} size={35} color={product.freeDelivery ? '#007AFF' : '#FFF'} />
                <Text style={style.delivery(product.freeDelivery)}>{product.freeDelivery ? 'Frete Grátis' : 'R$ 15,00 de frete'}</Text>
              </View>
            <TouchableOpacity style={[style.row('flex-start', 'center'), style.sellerArea]} activeOpacity={0.6}>
              <ScalableImage source={{uri: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png'}} width={60} style={style.sellerImage}/>
              <View style={style.sellerInfos}>
                <Text style={style.sellerName}>My Cell</Text>
                <View style={style.row('space-between')}>
                  <View style={style.row('space-between')}>
                  <MaterialCommunityIcons name='package-variant' size={getWidth(22, '/')} color='#007AFF' />
                    <Text style={style.sellerTotalSales}>{seller.totalSales} vendas</Text>
                  </View>
                  <View style={style.row('space-between')}>
                    <Stars length={5} rating={seller.rating} size={getWidth(26, '/')} color='#007AFF'/>
                    <Text style={style.sellerRating}>{seller.rating.toFixed(1)}</Text>
                  </View>
                  <View style={style.row('space-between')}>
                    <Ionicons name='location-sharp' size={getWidth(22, '/')} color='#007AFF' />
                    <Text style={style.sellerLocation}>{seller.location}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={style.section}>
              <TouchableOpacity style={style.row('space-between', 'center')} onPress={() => setShow(true)}>
                <Text style={style.sectionTitle}>Detalhes</Text>
                <MaterialIcons name='arrow-forward-ios' size={15} color='#FFF' />
              </TouchableOpacity>
            </View>
            <View style={style.section}>
              <TouchableOpacity style={style.row('space-between', 'center')}>
                <Text style={style.sectionTitle}>Avaliações</Text>
                <View style={style.row('flex-start')}>
                  <Stars length={1} rating={1} size={15} color='#007AFF'/>
                  <Text style={style.reviewsRatingValue}>{product.rating.toFixed(1)}</Text>
                  <Ionicons name='megaphone-sharp' size={15} color='#007AFF' />
                  <Text style={style.reviewsTotalRatings}>{product.totalRatings} opiniões</Text>
                  <MaterialIcons name='arrow-forward-ios' size={15} color='#FFF' />
                </View>
              </TouchableOpacity>
              <ScrollView style={style.reviewsArea}>
                <ScalableImage source={{uri: 'https://avatars.githubusercontent.com/u/78101033?v=4'}} width={60} style={style.reviewUserImage}/>
                <Text style={style.reviewUserName}>Kauã Reis</Text>
                <View></View>
              </ScrollView>
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
        {fullscreen && (
          <FullscreenModal image={image}/>
        )}
        <BottomSheet show={show} onDismiss={() => {setShow(false)}}>
          <ScrollView>
            {getDetails()}
          </ScrollView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
    
  );
}