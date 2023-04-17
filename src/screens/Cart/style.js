import { StyleSheet } from "react-native";
import { getWidth } from "../../utils";

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#090F2C',
    paddingTop: 30
  },
  separatorStore: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    backgroundColor: '#007AFF',
    alignSelf: 'center'
  },
  storeArea: {
    
  },
  storeInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  storeName: {
    fontSize: 15,
    color: '#FFF',
    marginLeft: 5
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginHorizontal: getWidth(30, '/')
  },
  location: {
    fontSize: 15,
    color: '#FFF',
    marginLeft: 5
  },
  separatorProduct: {
    marginVertical: 8,
    alignSelf: 'center'
  },
  productArea: {
    flexDirection: 'row',
  },
  radioArea: {
    width: 45,
    height: '100%',
    alignItems: 'flex-start',
  },
  radio: selected => ({
    width: 30,
    height: 30,
    borderRadius: 7.5,
    borderColor: selected ? '#FFF' : '#007AFF',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: selected ? '#007AFF' : '#FFF',
  }),
  radioFill: selected => ({
    width: 28,
    height: 28,
    borderRadius: 7,
    borderColor: selected ? '#FFF' : '#007AFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: selected ? '#007AFF' : '#FFF'
  }),
  image: {
    borderRadius: (getWidth(0.45, '*') / 20)
  },
  productInfos: {
    alignItems: 'flex-end',
    flex: 1,
  },
  model: {
    fontSize: 19,
    color: '#FFF',
    marginBottom: 2
  },
  prices: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  price: {
    fontSize: 23,
    color: '#007AFF',
    fontWeight: 'bold'
  },
  discount: {
    flexDirection: 'row'
  },
  discountValue: line => ({
    fontSize: 15,
    color: '#FFF',
    textDecorationLine: line,
    marginLeft: 3,
    marginTop: -2
  }),
  freeDelivery: free => ({
    fontSize: 14,
    color: free ? '#007AFF' : '#FFF',
    marginTop: 2
  }),
  actions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  actionButton: color => ({
    backgroundColor: color,
    height: 35,
    width: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }),
  actionText: color => ({
    fontSize: 30,
    fontWeight: 'bold',
    color,
  }),
  count: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF',
    marginHorizontal: 10
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  all: {
    fontSize: 14,
    color: '#FFF'
  },
  total: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold'
  },
  totalValue: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: 'bold'
  },
  buyButton: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
  },
  buyText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF'
  },
})

export default style;