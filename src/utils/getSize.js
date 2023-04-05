import { Dimensions } from 'react-native';

export function getWidth(value = 0, op  = '+') {
  return Math.round(eval(Dimensions.get('window').width + op + value))
}