import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppRouter from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
};

export default App;
