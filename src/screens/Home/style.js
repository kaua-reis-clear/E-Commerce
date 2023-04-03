import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#090F2C',
    flex: 1,
    paddingHorizontal: 15
  },
  titleArea: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    paddingRight: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#007AFF',
    alignSelf: 'flex-start'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  image: {
    width: 260,
    height: 300,
  }
});

export default style;
