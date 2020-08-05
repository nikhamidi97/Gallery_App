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
import ProfilePage from './components/ProfilePage';
import home from './components/home';
import search from './components/search';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginPage' headerMode="none">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="EmailAndPassword" component={EmailAndPassword} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="LoginForm" component={LoginForm} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="home" component={home} />
      <Stack.Screen name="search" component={search} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;