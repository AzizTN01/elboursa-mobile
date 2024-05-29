import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../views/SplashScreen';
import MainScreen from '../views/MainScreen';
import RegisterScreen from '../views/RegisterScreen';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
const Stack = createNativeStackNavigator();
const MainNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainHome" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
