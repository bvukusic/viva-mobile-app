import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerWrapper: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 18,
  },
  buttonWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4.84,
  },
  titleText: {
    width: '100%',
    fontSize: 14,
    color: '#29E2F7',
  },
});
