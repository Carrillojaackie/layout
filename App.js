import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';
import theme from './theme'; 

import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
