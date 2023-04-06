import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  plus: (size, color) => ({
    fontSize: (size * 22) / 40,
    bottom: (size * 40.25) / 40,
    left: (size * 17) / 40,
    zIndex: 100,
    marginBottom: -(size * 30) / 40,
    color,
    fontWeight: '600'
  })
});

export default style;