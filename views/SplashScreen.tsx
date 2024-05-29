import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import GlobalStyles from '../styles/global.styles';
import {getData} from '../utils/storage';

const SplashScreen = ({navigation}: {navigation: any}) => {
  const initNav = async () => {
    const phoneNumber = await getData('phoneNumber');
    if (phoneNumber) {
      navigation.replace('MainHome');
    } else {
      navigation.replace('Login');
    }
  };
  useEffect(() => {
    setTimeout(() => {
      initNav();
    }, 3000);
  }, []);
  return (
    <View style={GlobalStyles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/icon2.png')}
          style={styles.imageLogo}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageLogo: {
    width: 300,
    height: 300,
    objectFit: 'contain',
    marginRight: 30,
  },
  mainContainer: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    minHeight: 500,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoText: {
    color: '#FFFF',
    fontSize: 56,
    fontWeight: '400',
  },
  bottomContainer: {
    backgroundColor: '#000000',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    minHeight: 350,

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    paddingTop: 20,
    paddingBottom: 20,
  },
  inputContainer: {
    width: '90%',
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#FFFF',
    position: 'relative',
    marginVertical: 10,
  },
  inputContainerFocused: {
    borderColor: '#FF7901', // Change this color to your preferred focus color
  },
  inputLabel: {
    color: '#FFFF',
    position: 'absolute',
    right: 30,
    top: -10,
    backgroundColor: 'black',
    paddingHorizontal: 5,
    fontSize: 17,
  },
  focusedInputLabel: {
    color: '#FF7901',
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    borderRadius: 60,
    color: '#FFFF',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    position: 'absolute',
    top: 60,
    left: 10,
  },
  mainButton: {
    width: '90%',
    height: 60,
    borderRadius: 60,
    backgroundColor: '#FF7901',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  registerButton: {
    width: '90%',
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
