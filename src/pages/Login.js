import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar, TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Logo from '../components/Logo';
import Form from '../pages/Form';



const Login = () =>{
        return(
            <View style ={styles.container}>
              <Text style={styles.textstyle}>INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA</Text>
              <Logo/>
              <Form/>                          
            </View>

        )
    
}

const styles = StyleSheet.create({
    container : {
      backgroundColor :'#00994d',
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    textstyle :{
      fontSize:13,
      color:'#ffffff',
      marginVertical:20,
      backgroundColor:'#1c313a',
      width:wp('100%'),
      height:hp('7%'),
      paddingVertical:9,
      paddingHorizontal:45,
      alignItems:'center',
      justifyContent:'center',     

    },
    button:{
      justifyContent:'center',
      backgroundColor :'#1c313a',
      borderRadius :10,
      paddingVertical:10,
      marginBottom:30,  
      width :300,
  
     },
  
     loginbutton:{
          
          justifyContent:'center',
          textAlign:'center',       
          fontSize:16,
          fontWeight:'500',
          color: '#ffffff'
                  
     },
});

export default Login;
