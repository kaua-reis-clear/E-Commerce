import { StyleSheet } from "react-native";
import { getWidth, getHeight } from "../../utils";

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    position: 'absolute',
    height: getHeight(),
    width: getWidth(),
    zIndex: 101,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginBottom: 100,
  },
});

export default style;