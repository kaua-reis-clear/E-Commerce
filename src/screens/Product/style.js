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
    color: '#FFF',
    marginLeft: 5
  },
  model: {
    fontSize: 25,
    color: '#FFF',
    marginTop: 10,
    marginBottom: 5
  },
  discountIcon: {
    marginBottom: 6,
    marginRight: 5
  },
  price: {
    fontSize: 30,
    color: '#007AFF',
    fontWeight: 'bold'
  },
  oldPrice: {
    fontSize: 24,
    color: '#AAA',
    textDecorationLine: 'line-through',
    marginBottom: 6
  },
  installment: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 20
  },
  delivery: free => ({
    fontSize: 15,
    color: free ? '#007AFF' : '#FFF',
    marginLeft: 5
  }),
  deliveryTime: {
    fontSize: 15,
    color: '#FFF'
  },
  footer: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
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
  }),
  sellerArea: {
    marginTop: 20
  },
  sellerImage: {
    borderRadius: 30,
    marginRight: 5
  },
  sellerInfos: {
    flex: 1
  },
  sellerName: {
    fontSize: 20,
    color: '#FFF',
    marginBottom: 5,
  },
  sellerTotalSales: {
    fontSize: 12,
    color: '#FFF',
    marginLeft: 2,
  },
  sellerRating: {
    fontSize: 12,
    color: '#FFF',
    marginLeft: 2
  },
  sellerLocation: {
    fontSize: 12,
    color: '#FFF',
    marginLeft: 2
  }
});

export default style;