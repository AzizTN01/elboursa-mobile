import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (value: string, name: string) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (e) {
    // saving error
  }
};
const getData = async (name: string) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (e) {
    // error reading value
  }
};
export {storeData, getData};
