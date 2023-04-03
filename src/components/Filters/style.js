import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  filterArea: (last) => ({
    marginRight: last ? 0 : 20,
    alignItems: 'center'
  }),
  text: {
    color: '#FFF',
    fontSize: 15,
    marginTop: 5
  }
})

export default style