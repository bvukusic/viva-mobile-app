import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import LargeButton from '../../components/buttons/LargeButton/LargeButton';
import {AuthContext} from '../../context/AuthProvider';
import styles from './Profile.style';
const image = require('../../assets/backgrounds/default-background.png');

const Profile = ({navigation}) => {
  const {signOut} = useContext(AuthContext);

  return (
    <ImageBackground
      style={styles.container}
      source={image}
      imageStyle={styles.image}>
      <LargeButton buttonAction={() => navigation.navigate("EditProfile")} title="EDIT PROFILE" />
      <View style={{height: 20}} />
      <LargeButton buttonAction={() => signOut()} title="LOG OUT" />
    </ImageBackground>
  );
};

export default Profile;
