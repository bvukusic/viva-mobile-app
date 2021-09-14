import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  DotIndicator,
} from 'react-native-indicators';
import styles from './LargeButton.style';

const LargeButton = ({
  buttonAction,
  title,
  width,
  fontSize,
  arrowDown,
  disabled,
  red,
}) => {
  const [off, setOff] = useState(false);
  const enabledColor = ['#009ABB', '#009ABB'];
  const disabledColor = ['rgba(41, 226, 247, 0)', 'rgba(60, 121, 207, 0)'];

  const handleClick = async () => {
    let mounted = true;
    if (off) return;
    setOff(true);
    await buttonAction();
    if (mounted) {
      setOff(false);
    }
    return function cleanup() {
      mounted = false;
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleClick()}
        activeOpacity={0.8}
        disabled={disabled}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={disabled ? disabledColor : enabledColor}
          style={[styles.buttonWrapper, width && { width: width }]}>
          <View style={styles.textWrapper}>
            {!off ? (
              <Text
                style={[
                  styles.text,
                  fontSize && { fontSize: fontSize },
                  disabled && { color: 'rgba(255, 255, 255, 0)' },
                ]}>
                {' '}
                {title}{' '}
              </Text>
            ) : (
              <DotIndicator color="white" size={6} count={5} />
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
      {arrowDown && <View style={styles.arrowDown} />}
    </View>
  );
};

export default LargeButton;
