import AsyncStorage from '@react-native-async-storage/async-storage';

export const setValue = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.warn(e);
  }

//   console.warn('Stored ' + key + ":" + value);
};

export const getValue = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    // console.warn('Read: ' + key + ' ' + jsonValue)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(`Read value error : ${e}`);
    return null;
  }
};

export const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.warn(e);
  }

  // console.warn('Removed ' + key + '.')
};

export default {
  setValue,
  getValue,
  removeValue,
};
