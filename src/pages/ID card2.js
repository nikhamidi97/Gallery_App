import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity  } from "react-native";
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';

export default class IDcard2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.matric}>
          
            <Image                 
                style={{ borderRadius:8, marginTop:50,width:130, height:130}}
                source={require('../images/syed.jpg')}/>
            <View style={styles.textview}>
            <Text style={styles.textedit}>SYED ARIF</Text>
            <Text style={styles.textedit}>1718247</Text>
            <Text style={styles.textedit}>KICT</Text></View>

            <Image                 
                style={{borderRadius:8, marginTop:20,width:100, height:100}}
                source={require('../images/QR.png')}/>
                <Text style={styles.textedit2}>17.07.2020  03.29pm</Text>
         
                <TouchableOpacity style={{marginVertical:20}} onPress={()=> auth().signOut()} >
                     <Text style={{color:'black'}} >Logout</Text>
               </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-start',    
    backgroundColor: '#ffffff',
    textAlignVertical: 'top',
    
  },
  matric: {
    marginTop:20,
    alignItems: 'center',
    backgroundColor :'#00b383',
    width:wp('80%'),
    height:hp('80%'),
    marginHorizontal:40,
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
        
    
  },
  textedit:{    
    fontWeight:'bold',
    color:'black', fontSize:17

  },
  textedit2:{    
    fontWeight:'bold',
    color:'black', fontSize:14

  },
  textview:{
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
  }
});