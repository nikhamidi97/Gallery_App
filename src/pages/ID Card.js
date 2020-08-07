// import React, { Component } from "react";
// import { View, Text, StyleSheet, Button } from "react-native";

// export default class IDcard extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.button}>
//         <Button onPress={() => this.props.navigation.navigate('IAttend')} title="IAttend" />
//         </View>
//         <Text style={styles.button}>DIGITAL MATRIC CARD</Text>
//         <View style={styles.button}>
//         <Button onPress={() => this.props.navigation.navigate('Ewallet')} title="Ewallet" />
//         </View>
        
          
            
          

//           {/* <View >
//             <Button style={{marginHorizontal:60}} onPress={() => this.props.navigation.navigate('Form')} title="Form" />
//           </View> */}
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',   
//     backgroundColor: '#F5FCFF',
//     textAlignVertical: 'top',
//     flex: 1,
//     marginVertical: 12,
//     flexDirection: 'row'
//   },
  // button: {
  //   paddingHorizontal:10,
      
  // }
// });

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import auth from '@react-native-firebase/auth';

import IAttend from '../pages/IAttend';
import Ewallet from '../pages/Ewallet';
import IDcard2 from '../pages/ID card2';


const Tab = createMaterialTopTabNavigator();

const IDcard=()=> {
  return (
    
      <Tab.Navigator initialRouteName='ID Card'
            tabBarOptions={{
            activeTintColor: '#ffffff',
            labelStyle: {  fontWeight: 'bold' },
            
            style: { backgroundColor: '#455a64', },
          }}>
        <Tab.Screen name="IAttend" component={IAttend} />
        <Tab.Screen name="ID Card" component={IDcard2} />
        <Tab.Screen name="Ewallet" component={Ewallet} />
        
      </Tab.Navigator>
    
  );
}
export default IDcard;