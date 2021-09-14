import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './ProfileButton.style';

const ProfileButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <View style={styles.container}>
        <Ionicons name="person-circle-outline" size={35} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileButton;
