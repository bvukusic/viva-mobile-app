import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabBarWrapper: {
    position: 'absolute',
    bottom: 20,
    height: Platform.OS === 'android' ? 65 : 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(19, 64, 116, 0.9)',
    width: 230,
    borderRadius: 99,
    alignSelf: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 14,
    fontFamily: 'Quicksand-Medium',
    lineHeight: 12,
    paddingTop: 5,
  },
  iconWrapper: {
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
