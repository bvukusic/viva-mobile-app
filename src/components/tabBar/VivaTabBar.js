import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './VivaTabBar.style';

const VivaTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabBarWrapper}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const renderIcon = () => {
          switch (route.name) {
            case 'Home':
              return isFocused ? (
                <AntDesign name="heart" size={30} color="#009ABB" />
              ) : (
                <AntDesign name="hearto" size={30} color="#9E9FA1" />
              );
            case 'Timeline':
              return isFocused ? (
                <Ionicons name="body" size={30} color="#009ABB" />
              ) : (
                <Ionicons name="body-outline" size={30} color="#9E9FA1"ƒ />
              );
            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            activeOpacity={0.8}
            style={styles.tab}>
            <View style={styles.iconWrapper}>{renderIcon()}</View>
            <Text
              style={[
                styles.tabText,
                {color: isFocused ? '#FFFF' : '#9E9FA1'},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default VivaTabBar;
