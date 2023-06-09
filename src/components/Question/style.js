import { StyleSheet } from "react-native";
import { getWidth } from "../../utils";

const style = StyleSheet.create({
  questionArea: {
    maxWidth: getWidth(30, '-'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: isAnswer => ({
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: isAnswer ? '#AAA' : '#FFF',
    marginHorizontal: getWidth(30, '/')
  }),
  username: isAnswer => ({
    fontSize: 12,
    color: isAnswer ? '#AAA' : '#FFF',
  }),
  date: isAnswer => ({
    fontSize: 12,
    color: isAnswer ? '#AAA' : '#FFF',
  }),
  description: isAnswer => ({
    fontSize: 12,
    color: isAnswer ? '#AAA' : '#FFF',
    marginTop: 5,
    flexWrap: 'wrap',
    textAlign: 'justify',
  }),
  line: lineHeight => ({
    width: 0,
    borderLeftWidth: 1,
    borderColor: '#AAA',
    position: 'relative',
    top: 2,
    left: 6.1,
    height: lineHeight
  }),
  viewMoreArea: {
    paddingVertical: 5
  },
  viewMore: {
    fontSize: 12,
    color: '#AAA',
    fontWeight: 'bold',
    marginLeft: 30
  },
  answerArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 5
  },
  answerLineArea: {
    height: '100%',
    marginHorizontal: 5,
    marginTop: 5,
    width: 20,
  },
  answerLine: {
    width: '100%',
    height: 12,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#AAA'
  },
  answerInfos: {
    maxWidth: getWidth(50, '-'),
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});

export default style;