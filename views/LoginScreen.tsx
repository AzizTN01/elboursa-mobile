import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import GlobalStyles from '../styles/global.styles';
import {useAuth} from '../hooks/auth.hooks';
import {useRegister} from '../hooks/register.hooks';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const {
    data: loginData,
    mutateAsync: registerUser,
    isPending,
    isSuccess,
  } = useRegister();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [focusedInput, setFocusedInput] = useState('');
  function generateRandomString(length: number) {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    return Array.from({length}, () =>
      characters.charAt(Math.floor(Math.random() * charactersLength)),
    ).join('');
  }

  useEffect(() => {
    //console.log('Login Data', loginData);
    if (loginData ) {
      navigation.replace('MainHome');
    }
  }, [loginData]);

  const handleLogin = (data: any) => {
    console.log(data);
    registerUser({...data, password: generateRandomString(20)});
  };

  const handleRegister = () => {
    navigation.push('Register');
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{...GlobalStyles.mainContainer, ...styles.mainContainer}}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/icon2.png')}
              style={styles.imageLogo}
            />
            <Text style={styles.logoText}>El Bourse</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View
              style={[
                styles.inputContainer,
                focusedInput === 'phoneNumber' && styles.inputContainerFocused,
              ]}>
              <Text
                style={[
                  styles.inputLabel,
                  focusedInput === 'phoneNumber' && styles.focusedInputLabel,
                ]}>
                رقم الهاتف
              </Text>
              <Controller
                control={control}
                rules={{
                  required: 'رقم الهاتف مطلوب',
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: 'رقم الهاتف غير صالح',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    onBlur={() => {
                      onBlur();
                      setFocusedInput('');
                    }}
                    onFocus={() => setFocusedInput('phoneNumber')}
                    onChangeText={onChange}
                    value={value}
                    placeholder="أدخل رقم الهاتف"
                    placeholderTextColor="#CCCCCC"
                  />
                )}
                name="phoneNumber"
                defaultValue=""
              />
              {errors.phoneNumber && (
                <Text style={styles.errorText}>
                  {errors.phoneNumber.message}
                </Text>
              )}
            </View>
            {/* <View
              style={[
                styles.inputContainer,
                focusedInput === 'password' && styles.inputContainerFocused,
              ]}>
              <Text
                style={[
                  styles.inputLabel,
                  focusedInput === 'password' && styles.focusedInputLabel,
                ]}>
                كلمة المرور
              </Text>
              <Controller
                control={control}
                rules={{
                  required: 'كلمة المرور مطلوبة',
                  minLength: {
                    value: 6,
                    message: 'كلمة المرور يجب أن تكون على الأقل 6 أحرف',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    onBlur={() => {
                      onBlur();
                      setFocusedInput('');
                    }}
                    onFocus={() => setFocusedInput('password')}
                    onChangeText={onChange}
                    value={value}
                    placeholder="أدخل كلمة المرور"
                    placeholderTextColor="#CCCCCC"
                    secureTextEntry
                  />
                )}
                name="password"
                defaultValue=""
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View> */}
            <TouchableOpacity
              style={styles.mainButton}
              onPress={handleSubmit(handleLogin)}>
              <Text style={styles.buttonText}>تسجيل الدخول</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}>
              <Text style={styles.buttonText}>إنشاء حساب جديد</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageLogo: {
    width: 95,
    height: 95,
    objectFit: 'contain',
  },
  mainContainer: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    minHeight: 500,
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
