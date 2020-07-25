import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Loading from './components/Loading';
import LoginPage from './components/LoginPage';
import EmailAndPassword from './components/EmailAndPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginPage'>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="EmailAndPassword" component={EmailAndPassword} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="LoginForm" component={LoginForm} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;