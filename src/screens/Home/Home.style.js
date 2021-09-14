import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentWrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  greetingContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 15,
  },
  greeting: {
    fontSize: 34,
    fontFamily: 'Quicksand-Bold',
    color: '#0B2545',
    shadowColor: 'black',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexShrink: 1
  },
  image: {
    resizeMode: 'cover',
  },
});
