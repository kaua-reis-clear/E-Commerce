import React, { useState, useContext, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import style from './style';
import { Carousel, Stars, CartPlusIcon, DiscountIcon, FullscreenModal, ScalableImage, BottomSheet, Review, Question } from '../../components';
import { Ionicons, AntDesign, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { getWidth, toReal } from '../../utils';
import { ECommerceContext, CartContext } from '../../contexts';
import { stores, productDetails, reviews, questions } from '../../mock';

export default function Product({route}) {
  const product = route.params.product;
  const store = stores.find(store => store.id == product.storeId);
  const [favorited, setFavorited] = useState(false);
  const [image, setImage] = useState(null);
  const { fullscreen, setFullscreen, setShowModal } = useContext(ECommerceContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setShowModal(false)
  }, [])

  function getDetails() {
    let productDetail = productDetails[0];

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
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false} onTouchStart={() => setShowModal(false)}>
        <Carousel data={product.images} gallery style={style.carousel} setFullscreen={setFullscreen} setImage={setImage}>
          <TouchableOpacity activeOpacity={0.8} style={style.share}>
            <Ionicons name='share-social' size={30} color='#090F2C' />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={style.heart} onPress={() => setFavorited(current => !current)}>
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
          <TouchableOpacity activeOpacity={0.8} style={[style.row('flex-start', 'center'), style.storeArea]} >
            <ScalableImage source={{uri: 'https://cdn-icons-png.flaticon.com/512/5231/5231019.png'}} width={60} style={style.storeImage}/>
            <View style={style.storeInfos}>
              <Text style={style.storeName}>My Cell</Text>
              <View style={style.row('space-between')}>
                <View style={style.row('space-between')}>
                <MaterialCommunityIcons name='package-variant' size={getWidth(22, '/')} color='#007AFF' />
                  <Text style={style.storeTotalSales}>{store.totalSales} vendas</Text>
                </View>
                <View style={style.row('space-between')}>
                  <Stars length={5} rating={store.rating} size={getWidth(26, '/')} color='#007AFF'/>
                  <Text style={style.storeRating}>{store.rating.toFixed(1)}</Text>
                </View>
                <View style={style.row('space-between')}>
                  <Ionicons name='location-sharp' size={getWidth(22, '/')} color='#007AFF' />
                  <Text style={style.storeLocation}>{store.location}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.section}>
            <TouchableOpacity activeOpacity={0.8} style={style.sectionHeader} onPress={() => setShowModal(true)}>
              <Text style={style.sectionTitle}>Detalhes</Text>
              <MaterialIcons name='arrow-forward-ios' size={15} color='#FFF' />
            </TouchableOpacity>
          </View>
          <View style={style.section}>
            <TouchableOpacity activeOpacity={0.8} style={style.sectionHeader}>
              <Text style={style.sectionTitle}>Avaliações</Text>
              <View style={style.row('flex-start')}>
                <Stars length={1} rating={1} size={15} color='#007AFF'/>
                <Text style={style.reviewsRatingValue}>{product.rating.toFixed(1)}</Text>
                <Ionicons name='megaphone-sharp' size={15} color='#007AFF' />
                <Text style={style.reviewsTotalRatings}>{product.totalRatings} opiniões</Text>
                <MaterialIcons name='arrow-forward-ios' size={15} color='#FFF' />
              </View>
            </TouchableOpacity>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={style.reviewsArea}
            data={reviews}
            renderItem={({item}) => <Review review={item}/>}
            keyExtractor={review => review.id}
            ItemSeparatorComponent={<View style={style.separator}/>}
            />
          </View>
          <View style={[style.section, {marginBottom: 20}]}>
            <TouchableOpacity activeOpacity={0.8} style={style.sectionHeader}>
              <Text style={style.sectionTitle}>Dúvidas</Text>
              <View style={style.row('flex-start')}>
                <Ionicons name='chatbubbles' size={15} color='#007AFF' />
                <Text style={style.reviewsTotalRatings}>{product.totalRatings} perguntas</Text>
                <MaterialIcons name='arrow-forward-ios' size={15} color='#FFF' />
              </View>
            </TouchableOpacity>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={style.reviewsArea}
            data={questions}
            renderItem={({item}) => <Question question={item}/>}
            keyExtractor={question => question.id}
            ItemSeparatorComponent={<View style={style.separator}/>}
            />
          </View>
        </View>
      </ScrollView>
      <View style={style.footer}>
        <TouchableOpacity activeOpacity={0.8} style={style.buyButton('#FFF')}  onPress={() => addToCart(product)}>
          <CartPlusIcon size={35} color='#007AFF' />
          <Text style={style.buyText('#007AFF')}>ADICIONE AO CARRINHO</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={style.buyButton('#007AFF')}>
          <Feather name='shopping-bag' size={35} color='#FFF' />
          <Text style={style.buyText('#FFF')}>COMPRAR AGORA</Text>
        </TouchableOpacity>
      </View>
      {fullscreen && (
        <FullscreenModal image={image}/>
      )}
      <BottomSheet>
        <ScrollView>
          {getDetails()}
        </ScrollView>
      </BottomSheet>
    </View>
  );
}