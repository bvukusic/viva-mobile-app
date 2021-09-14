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
import styles from './SignUp.style';
const image = require('../../../assets/backgrounds/default-background.png');

const SignUp = ({navigation}) => {
  const {signUp} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSignUp = async () => {
    await signUp(email, password, confirmPassword, firstName, lastName);
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
            <VivaTextInput
              label="Confirm Password"
              secure
              value={confirmPassword}
              setValue={setConfirmPassword}
              // errors={'email' in fieldErrors ? fieldErrors.email : null}
            />
            <VivaTextInput
              label="First name"
              email
              value={firstName}
              setValue={setFirstName}
              // errors={'email' in fieldErrors ? fieldErrors.email : null}
            />
            <VivaTextInput
              label="Last name"
              email
              value={lastName}
              setValue={setLastName}
              // errors={'email' in fieldErrors ? fieldErrors.email : null}
            />
          </ScrollView>
          <View style={styles.mainButtonContainer}>
            <LargeButton buttonAction={() => handleSignUp()} title="Sign up" />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonsArea}>
          <View style={styles.signUpArea}>
            <View style={styles.signUpInnerWrapper}>
              <Text style={styles.haveAccountText}>
                Already have an account?
              </Text>
              <Button
                onPress={() => navigation.navigate('LogIn')}
                title="Log In"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignUp;
