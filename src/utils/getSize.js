import { Dimensions } from 'react-native';

export function getWidth(value = 0, op  = '+') {
  return Math.round(eval(Dimensions.get('window').width + op + value))
}

export function getHeight(value = 0, op  = '+') {
  return Math.round(eval(Dimensions.get('window').height + op + value))
}