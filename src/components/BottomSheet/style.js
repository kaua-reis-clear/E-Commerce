import { StyleSheet } from "react-native";
import { getHeight } from "../../utils";

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 102,
    backgroundColor: '#090F2C',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    elevation: 15
  },
  header: {
    height: 40,
    width: '100%',
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    borderRadius: 2,
    marginTop: 15,
  },
})

export default style;