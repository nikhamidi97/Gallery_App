// import React, { Component } from 'react';
// import 'react-native-gesture-handler';
// import { View, Text, StyleSheet, ImageBackground } from 'react-native';
// import LoginForm from './components/LoginForm';
// import HomePage from './components/HomePage';
// import Loading from './components/Loading';
// import LoginPage from './components/LoginPage';
// import EmailAndPassword from './components/EmailAndPassword';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProfilePage from './components/ProfilePage';
// import home from './components/home';
// import search from './components/search';

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator initialRouteName='LoginPage' headerMode="none">
//       <Stack.Screen name="LoginPage" component={LoginPage} />
//       <Stack.Screen name="HomePage" component={HomePage} />
//       <Stack.Screen name="EmailAndPassword" component={EmailAndPassword} />
//       <Stack.Screen name="Loading" component={Loading} />
//       <Stack.Screen name="LoginForm" component={LoginForm} />
//       <Stack.Screen name="ProfilePage" component={ProfilePage} />
//       <Stack.Screen name="home" component={home} />
//       <Stack.Screen name="search" component={search} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import IDcard from './src/pages/ID Card';
import IDcard2 from './src/pages/ID card2';
import Login from './src/pages/Login.js';
import Form from './src/pages/Form';
import IAttend from './src/pages/IAttend';
import Ewallet from './src/pages/Ewallet';
import LoginPage from './src/pages/LoginPage';
import Loading from './src/pages/Loading';
import MyClass from './src/pages/MyClass';
import CreateClass from './src/pages/CreateClass';
import JoinClass from './src/pages/JoinClass';
import info4993 from './src/class pages/info4993';
import Chapter from './src/class pages/chapter';
import Student from './src/class pages/student';
import Record from './src/class pages/record';
import Qrscanner from './src/components/qrscanner';
import Myclasslist from './src/student/Myclasslist';
import Studentlist from './src/student/Studentlist';
import StudentAttend from './src/student/StudentAttend';
import CreateClass2 from './src/pages/CreateClass2';
import JoinClass2 from './src/pages/JoinClass2';

const Stack = createStackNavigator();

function App() {
  return (
    
   
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="LoginPage" headerMode="none" screenOptions={{
        headerTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#00b359' },
      }}>
      <Stack.Screen name="Digital Matric" component={LoginPage} />
        <Stack.Screen   name="Login" component={Login}  />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen  name="ID Card" component={IDcard} />
        <Stack.Screen  name="IDcard2" component={IDcard2} />
        <Stack.Screen name="IAttend" component={IAttend} />
        <Stack.Screen name="Ewallet" component={Ewallet} />
        <Stack.Screen name="MyClass" component={MyClass} />
        <Stack.Screen name="CreateClass" component={CreateClass} />
        <Stack.Screen name="JoinClass" component={JoinClass} />
        <Stack.Screen name="info4993" component={info4993} />
        <Stack.Screen name="Chapter" component={Chapter} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="Qrscanner" component={Qrscanner} />
        <Stack.Screen name="Myclasslist" component={Myclasslist} />
        <Stack.Screen name="Studentlist" component={Studentlist} />
        <Stack.Screen name="StudentAttend" component={StudentAttend} />
        <Stack.Screen name="CreateClass2" component={CreateClass2} />
        <Stack.Screen name="JoinClass2" component={JoinClass2} />
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

export default App;

const styles = StyleSheet.create({
  container : {
    backgroundColor :'#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  headercontent:{
    justifyContent:'center',

  }


  
});
