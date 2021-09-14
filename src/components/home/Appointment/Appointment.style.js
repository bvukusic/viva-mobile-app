import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexShrink: 1,
    width: '90%',
    borderRadius: 30,
    backgroundColor: '#134074',
    paddingTop: '3%',
    paddingBottom: '7%',
    paddingHorizontal: '3%',
    alignItems: 'center',
  },
  messageContainer: {
    height: 120,
    width: '100%',
    backgroundColor: 'rgba(19, 64, 116, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  appointmentMessage: {
    fontSize: 22,
    fontFamily: 'Quicksand',
    color: '#F0F7EE',
    fontWeight: '600',
    letterSpacing: 2,
    lineHeight: 25,
  },
  dateContainer: {
    paddingVertical: 20,
  },
  date: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Quicksand',
    color: '#F0F7EE',
    fontWeight: '700',
    letterSpacing: 2,
    lineHeight: 35,
    paddingHorizontal: '9%',
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonContainer: {
    marginTop: 80,
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 8,
  },
});