import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import style from './style';
import { CartContext } from '../../contexts';
import { DiscountIcon, ScalableImage } from '../../components'
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { getWidth, toReal } from '../../utils';

function ProductItem({product, selectedAllFromStore}) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(selectedAllFromStore);
  }, [selectedAllFromStore]);

  return (
    <View style={style.productArea}>
      <View style={style.radioArea}>
        <TouchableOpacity activeOpacity={0.8} style={style.radio(selected)} onPress={() => setSelected(current => !current)}>
          {selected && (
            <FontAwesome name='check' size={20} color='#FFF' />
          )}
        </TouchableOpacity>
      </View>
      <ScalableImage source={{uri: product.image}} width={getWidth(0.45, '*')} style={style.image} />
      <View style={style.productInfos}>
        <Text style={style.model}>{product.model}</Text>
        <Text style={style.price}>{toReal(product.price)}</Text>
        {product.oldPrice && (
          <View style={style.discount}>
            <DiscountIcon size={18} color='#FFF' />
            <Text style={style.discountValue('line-through')}>{toReal(product.oldPrice - product.price)}</Text>
            <Text style={style.discountValue('none')}>off</Text>
          </View>
        )}
        <Text style={style.freeDelivery(product.freeDelivery)}>{product.freeDelivery ? 'Frete Grátis' : '+ R$ 15,00 de frete'}</Text>
        <View style={style.actions}>
          <TouchableOpacity activeOpacity={0.8} style={style.actionButton('#FFF')}>
            <FontAwesome name='minus' size={20} color='#007AFF' />
          </TouchableOpacity>
          <Text style={style.count}>1</Text>
          <TouchableOpacity activeOpacity={0.8} style={style.actionButton('#007AFF')}>
            <FontAwesome name='plus' size={20} color='#FFF' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function StoreItem({store, selectedAll}) {
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    setSelected(selectedAll);
  }, [selectedAll]);

  return (
    <View style={style.storeArea}>
      <View style={style.storeInfos}>
        <View style={style.radioArea}>
          <TouchableOpacity activeOpacity={0.8} style={style.radio(selected)} onPress={() => setSelected(current => !current)}>
              {selected && (
                <FontAwesome name='check' size={20} color='#FFF' />
              )}
          </TouchableOpacity>
        </View>
        <MaterialCommunityIcons name='storefront-outline' size={27} color='#007AFF' />
        <Text style={style.storeName}>{store.storeName}</Text>
        <View style={style.dot} />
        <Ionicons name='location-outline' size={25} color='#007AFF' />
        <Text style={style.location}>{store.location}</Text>
      </View>
      <FlatList
      data={store.products}
      ItemSeparatorComponent={<View style={style.separatorProduct} />}
      renderItem={({item}) => <ProductItem product={item} selectedAllFromStore={selected}/>}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

export default function Cart() {
  const { state, addToCart, removeFromCart } = useContext(CartContext);
  const [selected, setSelected] = useState(true);

  return (
    <View style={style.container}>
      <FlatList
      data={state.products}
      ItemSeparatorComponent={<View style={style.separatorStore}/>}
      renderItem={({item}) => <StoreItem store={item} selectedAll={selected} />}
      keyExtractor={store => store.storeId}
      />
      <View style={style.footer}>
        <TouchableOpacity activeOpacity={0.8} style={style.row}>
          <View style={style.radioArea}>
            <TouchableOpacity activeOpacity={0.8} style={style.radio(selected)} onPress={() => setSelected(current => !current)}>
              {selected && (
                <FontAwesome name='check' size={20} color='#FFF' />
              )}
            </TouchableOpacity>
          </View>
          <Text style={style.all}>Tudo</Text>
        </TouchableOpacity>
        <View style={style.row}>
          <Text style={style.total}>Total: </Text>
          <Text style={style.totalValue}>R$ 5000,00</Text>
        </View>
        <TouchableOpacity style={style.buyButton}>
          <Text style={style.buyText}>Continuar(2)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}