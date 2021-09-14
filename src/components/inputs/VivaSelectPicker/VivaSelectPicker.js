import React, {useEffect, useRef, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import styles from './VivaSelectPicker.style';
export const VivaSelectPicker = ({label, values, setValue, value}) => {
  const [selected, setSelected] = useState(value);

  const handleChange = value => {
    let labelText;
    if (value === null || value === undefined) return;
    setValue(value);
    if (values) labelText = values.find(obj => obj.value === value).label;
    labelText ? setSelected(labelText) : setSelected(value);
  };

  useEffect(() => {
    if (true) {
      Animated.timing(blueWidth, {
        toValue: 10,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(redWidth, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [value]);

  const blueWidth = useRef(new Animated.Value(0)).current;
  const redWidth = useRef(new Animated.Value(0)).current;

  return (
    <View style={[styles.myDTextInputWrapper]}>
      <View style={styles.label}>
        {label && <Text style={styles.labelText}>{label}</Text>}
      </View>
      <RNPickerSelect
        value={value}
        onValueChange={value => handleChange(value)}
        useNativeAndroidPickerStyle={false}
        items={values}>
        <View style={styles.inputWrapper}>
          <Text style={styles.selectionText}>{selected}</Text>
        </View>
      </RNPickerSelect>
      <View style={styles.bottomBarWrapper}>
        <Animated.View style={[styles.barBlue, {flex: blueWidth}]}>
          <LinearGradient
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#29E2F7', '#3C7ACF']}
          />
        </Animated.View>
        <Animated.View style={[styles.barRed, {flex: redWidth}]}>
          <LinearGradient
            style={styles.gradient}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#FA9AC6', '#E01A71']}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default VivaSelectPicker;
