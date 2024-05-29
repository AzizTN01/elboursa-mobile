import {useMutation} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import {post} from '../utils/apiHelpers';
import {storeData} from '../utils/storage';
const API_LOGIN_ENDPOINT = 'auth/auth'; // Replace this with your actual login endpoint
type LoginData = {
  phoneNumber: string;
  password: string;
};

export const useAuth = () => {
  return useMutation({
    mutationFn: (loginInfo: LoginData) => post(API_LOGIN_ENDPOINT, loginInfo),
    onSuccess: data => {
      if (data.success) {
        storeData(data.token, 'access-token');
        //navigation.replace('/MainHome');
        // router.replace('/dashboard');
        // setAuthToken(data.token);
      } else {
        // toast({
        //   variant: 'destructive',
        //   title: 'Erreur',
        //   description: 'Numéro Tél ou mot de passe incorrect',
        // });
        Toast.show({
          type: 'success',
          text1: 'رقم الهاتف أو كلمة المرور غير صحيحة',
        });
      }
    },
  });
};
