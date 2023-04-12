import { StyleSheet } from "react-native";
import { getWidth } from "../../utils";

const style = StyleSheet.create({
  reviewArea: {
    justifyContent: 'space-between',
    maxWidth: getWidth(30, '-'),
  },
  review: (align) => ({
    alignItems: align,
  }),
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginTop: 5,
    marginHorizontal: getWidth(30, '/')
  },
  reviewUserName: {
    fontSize: 12,
    color: '#FFF',
  },
  reviewDate: {
    fontSize: 12,
    color: '#AAA'
  },
  reviewRating: {
    fontSize: 10,
    color: '#AAA',
    marginBottom: 1,
    marginLeft: 5,
    marginRight: 5
  },
  reviewTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
    marginBottom: 2
  },
  reviewDescription: {
    fontSize: 12,
    color: '#FFF',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'justify'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  }
});

export default style;