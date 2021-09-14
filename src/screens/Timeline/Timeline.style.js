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
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.8)',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    zIndex: 99,
  },
  greeting: {
    fontSize: 25,
    fontFamily: 'Quicksand-Bold',
    textAlign: 'center',
    color: '#0B2545',
  },
  addEntryButton: {
    backgroundColor: '#134074',
    height: 40,
    width: 40,
    paddingLeft: 3,
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',

  },
  timelineContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  flatlistContainer: {
    paddingBottom: 200,
    paddingTop: 130,
  },
  image: {
    resizeMode: 'cover',
  },
});
