import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  cartButtonArea: color => ({
    position: 'relative',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    top: 15,
    left: 25,
    zIndex: 100,
    marginTop: -20,
  }),
  cartButtonText: color => ({
    color: color,
    fontSize: 12,
    fontWeight: 'bold',
  })
});

export default style;