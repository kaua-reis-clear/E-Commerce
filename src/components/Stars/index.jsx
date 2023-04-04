import React from 'react';
import { View } from 'react-native';
import style from "./style";
import { FontAwesome } from '@expo/vector-icons';

export default function Stars({length, rating, size}) {
  console.log(length, rating)
  function getStars() {
    return Array.from({length}).map((_, index) => {
      if (index + 1 <= rating) {
        return (
          <FontAwesome key={index} name="star" size={size} color="white" />
        )
      } else if (index + 1 - 0.5 <= rating) {
        return (
          <FontAwesome key={index} name="star-half-o" size={size} color="white" />
        )
      } else {
        return (
          <FontAwesome key={index} name="star-o" size={size} color="white" />
        )
      }
    });
  }

  return (
    <View style={style.stars}>
      {getStars()}
    </View>
  );
}