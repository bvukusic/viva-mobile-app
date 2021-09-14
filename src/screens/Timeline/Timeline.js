import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TimelineEntry from '../../components/timeline/TimelineEntry/TimelineEntry';
import {TimelineContext} from '../../context/TimelineProvider';
import {AuthContext} from '../../context/AuthProvider';
import styles from './Timeline.style';
import TimelineModal from './TimelineModal/TimelineModal';
const image = require('../../assets/backgrounds/default-background.png');

const Timeline = ({navigation}) => {
  const {timelineEntries, getTimelineEntries, loadingTimeline} =
    useContext(TimelineContext);
  const {userToken} = useContext(AuthContext);
  useEffect(() => {
    getTimelineEntries(userToken);
  }, []);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({item, index}) => {
    return <TimelineEntry key={index} entry={item} mood={index % 2 === 0} />;
  };

  return (
    <ImageBackground
      style={styles.contentWrapper}
      source={image}
      imageStyle={styles.image}>
      <View style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Your wellbeing history</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            activeOpacity={0.8}
            style={styles.addEntryButton}>
            <Ionicons name="add" size={35} color="#FFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.timelineContainer}>
          {loadingTimeline ? (
            <View style={{flex: 1}}>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          ) : (
            <FlatList
              data={timelineEntries}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatlistContainer}
            />
          )}
        </View>
      </View>
      {modalVisible && (
        <TimelineModal
          isModalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      )}
    </ImageBackground>
  );
};

export default Timeline;
