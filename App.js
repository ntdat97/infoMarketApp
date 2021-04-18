import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabBottom from './src/screens/TabBottom';
import {store} from './src/store';
import {StoreProvider} from 'easy-peasy';
const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <TabBottom />
      </NavigationContainer>
    </StoreProvider>
  );
};
export default App;
