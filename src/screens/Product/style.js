import { StyleSheet } from "react-native";
import { getWidth } from "../../utils";

const style = StyleSheet.create({
  container: {
    backgroundColor: '#090F2C',
    flex: 1,
  },
  carousel: {
    backgroundColor: 'white',
    paddingTop: 70,
    paddingBottom: 15,
    marginBottom: 3
  },
  share: {
    bottom: 27,
    marginBottom: -30,
    marginLeft: 15
  },
  heart: {
    bottom: 27,
    left: getWidth(45, '-'),
    marginBottom: -30
  },
  row: (space, center) => ({
    flexDirection: 'row',
    justifyContent: space ? 'space-between' : 'flex-start',
    alignItems: center ? 'center' : 'flex-end'
  }),
  content: {
    paddingHorizontal: 15,
  },
  rating: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: 5
  },
  sales: {
    fontSize: 14,
    color: '#FFF'
  },
  model: {
    fontSize: 25,
    color: '#FFF',
    marginTop: 10,
    marginBottom: 3
  },
  discountIcon: {
    marginBottom: 6,
    marginRight: 5
  },
  price: {
    fontSize: 36,
    color: '#007AFF',
    fontWeight: 'bold'
  },
  oldPrice: {
    fontSize: 20,
    color: '#AAA',
    textDecorationLine: 'line-through',
    marginBottom: 6
  },
  installment: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 10
  },
  delivery: free => ({
    fontSize: 16,
    color: free ? '#007AFF' : '#FFF',
    marginLeft: 5
  }),
  deliveryTime: {
    fontSize: 16,
    color: '#FFF'
  },
  footer: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingTop: 8
  },
  buyButton: color => ({
    alignItems: 'center',
    backgroundColor: color,
    padding: 5,
    borderRadius: 10,
    width: 170
  }),
  buyText: color => ({
    fontSize: 13,
    fontWeight: 'bold',
    color
  })
});

export default style;