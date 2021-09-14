import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  myDTextInputWrapper: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 82,
    width: 300,
    overflow: 'hidden',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  labelWrapper: {
    height: 15,
    flexDirection: 'row',
    paddingLeft: 15,
  },
  label: {
    flex: 1,
    height: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 13,
    color: '#00222e',
    alignSelf: 'flex-start',
    fontWeight: '500',
    paddingLeft: 8,
  },
  error: {
    height: 20,
    alignItems: 'flex-end',
  },
  errorsText: {
    fontSize: 12,
    color: '#E01A71',
    fontWeight: '500',
    paddingLeft: 8,
    paddingTop: 5,
  },
  inputWrapper: {
    height: 38,
    justifyContent: 'flex-end',
  },
  textInput: {
    flex: 1,
    paddingBottom: 3,
    paddingHorizontal: 14,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Quicksand',

    color: '#00222e',
  },
  showPasswordButton: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarWrapper: {
    height: 2,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  barBlue: {
    flex: 1,
    marginRight: 5,
  },
  barRed: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
