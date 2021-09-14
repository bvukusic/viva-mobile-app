import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: '70%',
    flexShrink: 1,
    width: '90%',
    borderRadius: 30,
    backgroundColor: '#134074',
    paddingTop: '3%',
    paddingBottom: '7%',
    paddingHorizontal: '3%',
    alignItems: 'center',
  },
  explanationText: {
    fontFamily: 'Quicksand',
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFF',
    paddingVertical: 10,
  },
  buttonContainer: {
    marginTop: 80,
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 8,
  },
  doctorItem: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 5,
    height: 50,
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  doctor: {
    fontFamily: 'Quicksand',
    fontWeight: '600',
    color: '#FFFF',
    fontSize: 18,
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  flatlistContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: '3%',
  },
});
