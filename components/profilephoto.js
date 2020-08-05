//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


// create a component
const Logo = () => {
    return (
        <View style={{backgroundColor:'white', marginTop:30,flexDirection:'column',
        justifyContent:'center',borderRadius:100,elevation:7}}>
            
            <Image source={{uri:'https://uilogos.co/img/logotype/circle.png'}} style={{height:150, width:150}} />
            
        </View>
    );
};

export default Logo;