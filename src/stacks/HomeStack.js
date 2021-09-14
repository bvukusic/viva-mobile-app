import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import {VivaHeader} from '../components/header/VivaHeader';
import EditProfile from '../screens/EditProfile/EditProfile';

const HomeScreens = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <HomeScreens.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerStyle: {
          height: 80,
        },
        header: ({scene, previous, navigation}) => {
          const {options} = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <VivaHeader
              title={title}
              previous={previous}
              navigation={navigation}
            />
          );
        },
        headerTransparent: true,
      }}>
      <HomeScreens.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeScreens.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
      <HomeScreens.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'EditProfile'}}
      />
    </HomeScreens.Navigator>
  );
}
