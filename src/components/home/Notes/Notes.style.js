import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    flexShrink: 1,
  },
  noteWrapper: {
    height: 40,
    width: '100%',
    paddingVertical: 5,
  },
  noteContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 6,
  },
  noteContainerPatient: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(20,160,200,1)',
  },
  noteContainerDoctor: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(15,125,157,1)',
  },
  note: {
    fontSize: 16,
    fontFamily: 'Quicksand',
    color: '#F0F7EE',
    fontWeight: '600',
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    height: 50,
    marginTop: 10,
  },
  noteInput: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    height: 50,
    borderRadius: 3,
    fontSize: 15,
    paddingHorizontal: 10,
    fontFamily: 'Quicksand',
    color: '#F0F7EE',
    fontWeight: '500',
  },
  flatlistContainer: {
    width: '100%',
    height: '100%',
  }
});
