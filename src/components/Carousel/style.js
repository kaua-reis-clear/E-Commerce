import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  carousel: (gallery) => ({
    marginTop: gallery ? 0 : 15,
  }),
  productArea: {
    
  },
  productInfos: multi => ({
    paddingHorizontal: multi ? 2 : 10,
    marginTop: 7
  }),
  model: multi => ({
    fontSize: multi ? 16 : 25,
    color: '#FFF',
  }),
  row: (align) => ({
    flexDirection: 'row',
    alignItems: `flex-${align}`,
    justifyContent: 'space-between'
  }),
  price: multi => ({
    fontSize: multi ? 20 : 30,
    color: '#007AFF',
    fontWeight: 'bold',
  }),
  sales: multi => ({
    fontSize: multi ? 11 : 18,
    color: '#FFF',
    marginBottom: 3
  }),
  separator: {
    marginHorizontal: 5
  },
  indexIndicator: gallery => ({
    marginTop: gallery ? 7 : 20
  })
});

export default style;