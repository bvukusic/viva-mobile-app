import React from 'react';
import HomeStack from '../stacks/HomeStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VivaTabBar from '../components/tabBar/VivaTabBar';
import Profile from '../screens/Profile/Profile';
import Timeline from '../screens/Timeline/Timeline';

const Tabs = createBottomTabNavigator();

export const AccountStack = () => {
  return (
    <Tabs.Navigator
      tabBar={({state, descriptors, navigation}) => (
        <VivaTabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      )}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Timeline" component={Timeline} />
    </Tabs.Navigator>
  );
};

export default AccountStack;
