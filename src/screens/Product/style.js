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
  row: (space = 'flex-start', center = 'flex-end') => ({
    flexDirection: 'row',
    justifyContent: space,
    alignItems: center
  }),
  content: {
    paddingHorizontal: 15,
  },
  ratingValue: {
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
    marginBottom: 4
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
  },
  section: {
    marginTop: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#007AFF',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 4,
  },
  detailSection: {
    paddingHorizontal: 15,
    marginBottom: 20
  },
  detailTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FFF',
    marginBottom: 10
  },
  detailRow: {
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#FFF'
  },
  detailInfo: {
    flexWrap: 'wrap',
    maxWidth: '50%',
    color: '#FFF'
  },
  reviewsRatingValue: {
    fontSize: 12,
    color: '#007AFF',
    marginLeft: 5,
    marginRight: 10
  },
  reviewsTotalRatings: {
    fontSize: 12,
    color: '#007AFF',
    marginRight: 10,
    marginLeft: 5
  },
  reviewsArea: {
    marginTop: 10
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
});

export default style;