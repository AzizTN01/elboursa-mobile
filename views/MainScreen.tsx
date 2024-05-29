import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../styles/global.styles';

const MainScreen = ({navigation}: {navigation: any}) => {
  const handleLogin = () => {
    navigation.push('Login');
  };
  const handleRegister = () => {
    navigation.push('Register');
  };
  return (
    <View style={{...GlobalStyles.mainContainer, ...styles.mainContainer}}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/icon2.png')}
          style={styles.imageLogo}
        />
        <Text style={styles.logoText}>El Bourse</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.titleText}>مرحبا بكم في البورص</Text>
        <Text style={styles.subText}>في أي مكان وفي أي وقت</Text>
        <TouchableOpacity style={styles.mainButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>تسجيل الدخول</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.RegisterButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>إنشأ حساب جديد</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  imageLogo: {
    width: 95,
    height: 95,
    objectFit: 'contain',
  },
  mainContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  logoContainer: {
    flexDirection: 'row',
    rowGap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  logoText: {
    color: '#FFFF',
    fontSize: 56,
    fontWeight: '400',
  },
  bottomContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '43%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  titleText: {
    fontWeight: '600',
    fontSize: 32,
    color: '#FFFF',
    fontFamily: 'Manrope-ExtraBold',
  },
  subText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#FFFF',
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
  RegisterButton: {
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
