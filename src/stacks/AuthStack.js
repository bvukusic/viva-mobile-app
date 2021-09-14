import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from '../screens/Auth/LogIn/LogIn';
import SignUp from '../screens/Auth/SignUp/SignUp';

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator initialRouteName="LogIn" headerMode="none">
      <Auth.Screen name="LogIn" component={LogIn} options={{title: 'Log In'}} />
      <Auth.Screen name="SignUp" component={SignUp} options={{title: 'Sign Up'}} />
    </Auth.Navigator>
  );
}
