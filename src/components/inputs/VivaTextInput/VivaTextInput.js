import React, {useEffect, useRef, useState} from 'react';
import {Animated, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './VivaTextInput.style';

export const VivaTextInput = ({
  label,
  email,
  username,
  value,
  setValue,
  password,
  secure,
  errors,
  onEndEditing,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const blueWidth = useRef(new Animated.Value(300)).current;
  const redWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (errors) {
      Animated.timing(blueWidth, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      Animated.timing(redWidth, {
        toValue: 10,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isEditing, errors]);

  return (
    <View style={styles.myDTextInputWrapper}>
      <View style={styles.labelWrapper}>
        {/* {email && <EmailIcon height={18} width={16} />}
        {username && <UsernameIcon height={17} width={12} />}
        {password && <PasswordIcon height={15} width={15} />} */}
        <View style={styles.label}>
          {label && <Text style={styles.labelText}>{label}</Text>}
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInput}
          onBlur={() => setIsEditing(false)}
          onFocus={() => setIsEditing(true)}
          defaultValue={value}
          autoCompleteType="off"
          autoCorrect={false}
          onChangeText={newValue => setValue(newValue)}
          autoCapitalize="none"
          secureTextEntry={secure && !showPassword}
          keyboardType={email ? 'email-address' : 'default'}
          returnKeyType="done"
        />
        {/* {password && (
          <View style={styles.showPasswordButton}>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <ShowPasswordIcon height={20} width={20} />
            </TouchableOpacity>
          </View>
        )} */}
      </View>
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
      <View style={styles.error}>
        {errors && <Text style={styles.errorsText}>{errors}</Text>}
      </View>
    </View>
  );
};

export default VivaTextInput;
