import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  indicatorArea: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicatorItem: (current) => ({
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: current ? '#007AFF' : '#AAA',
    marginHorizontal: 4
  })
});

export default style;