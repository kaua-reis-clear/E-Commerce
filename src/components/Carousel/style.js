import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  carousel:{
    marginTop: 15,
    marginBottom: 5
  },
  productArea: {
    
  },
  productInfos: {
    paddingHorizontal: 10,
  },
  model: {
    fontSize: 25,
    color: '#FFF',
  },
  row: (align) => ({
    flexDirection: 'row',
    alignItems: `flex-${align}`,
    justifyContent: 'space-between'
  }),
  price: {
    fontSize: 30,
    color: '#007AFF',
    fontWeight: 'bold'
  },
  sales: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 3
  },
});

export default style;