import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './VivaHeader.style';

export const VivaHeader = ({title, previous, navigation, journey}) => {
  
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[styles.headerWrapper, Platform.OS === 'android' && {height: 70}]}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => handleGoBack()}>
          <Ionicons
            name="ios-chevron-back-sharp"
            size={40}
            color="rgba(19, 64, 116, 1)"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.titleText}></Text>
      </View>
    </View>
  );
};

export default VivaHeader;
