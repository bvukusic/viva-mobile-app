import React, {useContext, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  ImageBackground,
} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';
import VivaTextInput from '../../components/inputs/VivaTextInput/VivaTextInput';
import LargeButton from '../../components/buttons/LargeButton/LargeButton';
import styles from './EditProfile.style';
const image = require('../../assets/backgrounds/default-background.png');

const EditProfile = ({navigation}) => {
  const {user} = useContext(AuthContext);

  const [email, setEmail] = useState(user.email);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);

  const handleSignUp = async () => {
    // await signUp(email, password, confirmPassword, firstName, lastName);
  };

  return (
    <ImageBackground
      style={styles.contentWrapper}
      source={image}
      imageStyle={styles.image}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.inputsWrapper}
          keyboardVerticalOffset={0}
          behavior="padding">
          <ScrollView contentContainerStyle={styles.kAScrollView}>
            <VivaTextInput
              label="Email Adress"
              email
              value={email}
              setValue={setEmail}
            />
            <VivaTextInput
              label="First name"
              email
              value={firstName}
              setValue={setFirstName}
            />
            <VivaTextInput
              label="Last name"
              email
              value={lastName}
              setValue={setLastName}
            />
          </ScrollView>
          <View style={styles.mainButtonContainer}>
            <LargeButton buttonAction={() => handleSignUp()} title="SAVE" />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default EditProfile;
