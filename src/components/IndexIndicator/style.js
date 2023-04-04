import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  indicatorArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  indicatorItem: (current) => ({
    width: 13,
    height: 13,
    borderRadius: 6.5,
    backgroundColor: current ? '#007AFF' : '#FFF',
    marginHorizontal: 4
  })
});

export default style;