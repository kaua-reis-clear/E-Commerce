import React, { memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Stars from '../Stars';
import style from './style';

function Review({review}) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style.reviewArea} key={review.id}>
      <View style={style.row}>
        <Stars length={5} rating={review.rating} size={15} color='#FFF' />
        <View style={style.dot}/>
        <Text style={style.reviewUserName}>{review.username}</Text>
        <View style={style.dot}/>
        <Text style={style.reviewDate}>{review.date}</Text>
      </View>
      
      <Text style={style.reviewTitle}>{review.title}</Text>
      <Text style={style.reviewDescription}>{review.description}</Text>
    </TouchableOpacity>
  );
}

export default memo(Review);