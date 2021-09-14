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
  },
  buttonsArea: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 26,
    color: '#FFFF',
    letterSpacing: 19,
    fontFamily: 'Barlow-Medium',
  },
  signUpArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
  },
  signUpInnerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAccountText: {
    fontSize: 17,
    paddingRight: 20,
    color: '#134074',
    textAlign: 'right',
  },
  image: {
    resizeMode: 'cover',
  },
});
