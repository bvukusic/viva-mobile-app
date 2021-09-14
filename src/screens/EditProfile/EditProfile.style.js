import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  kAScrollView: {
    flex: 1,
    paddingHorizontal: '10%',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
  contentWrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  inputsWrapper: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  forgotPassButton: {
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  forgotPassText: {
    fontSize: 13,
    color: '#FF4BA8',
  },
  mainButtonContainer: {
    width: '100%',
    alignSelf: 'center',
    paddingBottom: 120,
  },
  image: {
    resizeMode: 'cover',
  },
});
