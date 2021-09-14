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
import {AuthContext} from '../../../context/AuthProvider';
import VivaTextInput from '../../../components/inputs/VivaTextInput/VivaTextInput';
import LargeButton from '../../../components/buttons/LargeButton/LargeButton';
import styles from './LogIn.style';
const image = require('../../../assets/backgrounds/default-background.png');

const LogIn = ({navigation}) => {
  const {logIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
    await logIn(email, password);
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
              // errors={'email' in fieldErrors ? fieldErrors.email : null}
            />
            <VivaTextInput
              label="Password"
              secure
              value={password}
              setValue={setPassword}
              // errors={'email' in fieldErrors ? fieldErrors.email : null}
            />
          </ScrollView>
          <View style={styles.mainButtonContainer}>
            <LargeButton buttonAction={() => handleLogIn()} title="Log In" />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonsArea}>
          <View style={styles.signUpArea}>
            <View style={styles.signUpInnerWrapper}>
              <Text style={styles.haveAccountText}>Don't have an account?</Text>
              <Button
                onPress={() => navigation.navigate('SignUp')}
                title="Sign Up"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LogIn;
