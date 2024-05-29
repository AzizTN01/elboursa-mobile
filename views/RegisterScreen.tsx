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
import {useRegister} from '../hooks/register.hooks';

const RegisterScreen = ({navigation}: {navigation: any}) => {
  const {
    data: loginData,
    mutateAsync: registerUser,
    isPending,
    isSuccess,
  } = useRegister();
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const [focusedInput, setFocusedInput] = useState('');

  useEffect(() => {
    console.log('Login Data', loginData);
    if (loginData && loginData.success) {
      navigation.replace('MainHome');
    }
  }, [loginData]);

  function handleRegister(data: any) {
    registerUser(data);
  }

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
            <View
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
            </View>
            <View
              style={[
                styles.inputContainer,
                focusedInput === 'confirmPassword' &&
                  styles.inputContainerFocused,
              ]}>
              <Text
                style={[
                  styles.inputLabel,
                  focusedInput === 'confirmPassword' &&
                    styles.focusedInputLabel,
                ]}>
                إعادة كلمة المرور
              </Text>
              <Controller
                control={control}
                rules={{
                  required: 'تأكيد كلمة المرور مطلوب',
                  validate: value =>
                    value === watch('password') || 'كلمات المرور غير متطابقة',
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={styles.input}
                    onBlur={() => {
                      onBlur();
                      setFocusedInput('');
                    }}
                    onFocus={() => setFocusedInput('confirmPassword')}
                    onChangeText={onChange}
                    value={value}
                    placeholder="أعد إدخال كلمة المرور"
                    placeholderTextColor="#CCCCCC"
                    secureTextEntry
                  />
                )}
                name="confirmPassword"
                defaultValue=""
              />
              {errors.confirmPassword && (
                <Text style={styles.errorText}>
                  {errors.confirmPassword.message}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={handleSubmit(handleRegister)}>
              <Text style={styles.buttonText}>إنشأ حساب جديد</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  imageLogo: {
    width: 95,
    height: 95,
    objectFit: 'contain',
  },
  mainContainer: {
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#000000',
    flex: 1,
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
    flex: 1,
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
    left: 30,
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
  buttonText: {
    color: '#FFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
