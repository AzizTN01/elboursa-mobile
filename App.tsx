import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNav from './navigation/main.nav';
import {ThemeProvider} from 'react-native-magnus';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
const queryClient = new QueryClient();
const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <MainNav />
          <Toast />
        </QueryClientProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
