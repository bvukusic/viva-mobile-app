import React, {useContext, useEffect} from 'react';
import {View, ImageBackground, ActivityIndicator} from 'react-native';
import {AuthContext} from './context/AuthProvider';
import AuthStack from './stacks/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import AccountStack from './stacks/AccountStack';
const image = require('./assets/backgrounds/default-background.png');
const Routes = () => {
  const {userToken, checkToken, isLoading} = useContext(AuthContext);

  useEffect(() => {
    checkToken();
  }, []);

  if (isLoading)
    return (
      <ImageBackground style={{flex: 1}} source={image}>
        <ActivityIndicator size="large" color="#0000ff" />
      </ImageBackground>
    );
  else
    return (
      <NavigationContainer>
        {!userToken ? <AuthStack /> : <AccountStack />}
      </NavigationContainer>
    );
};

export default Routes;
