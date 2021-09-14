import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)'
  },
  noteInput: {
    height: 80,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#00bbe6',
    padding: 20,
    fontSize: 18,
    color: '#FFFF',
    fontFamily: 'Quicksand',
    fontWeight: '600'
  },
});
