import React, {useContext, useState} from 'react';
import {SafeAreaView, View, Text, ImageBackground} from 'react-native';
import ProfileButton from '../../components/buttons/ProfileButton/ProfileButton';
import Appointment from '../../components/home/Appointment/Appointment';
import FindDoctor from '../../components/home/FindDoctor/FindDoctor';
import {AuthContext} from '../../context/AuthProvider';
import styles from './Home.style';
const image = require('../../assets/backgrounds/default-background.png');

const Home = ({navigation}) => {
  const {user, appointment, isLoading, assignedDoctor} =
    useContext(AuthContext);

  const renderHasDoctorAssigned = () => {
    switch (assignedDoctor.message) {
      case 'No doctor assigned':
        return <FindDoctor />;


      case 'Has doctor assigned':
        return <Appointment />;
    }
  };

  return (
    <ImageBackground
      style={styles.contentWrapper}
      source={image}
      imageStyle={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, {user.first_name}!</Text>
          <ProfileButton navigation={navigation} />
        </View>
        {isLoading ? <View /> : renderHasDoctorAssigned()}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
