import { Dimensions } from 'react-native';

export function getWidth(value, op) {
  return eval(Dimensions.get('window').width + op + value)
}