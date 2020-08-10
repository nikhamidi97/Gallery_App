import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView, color  } from "react-native";
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, marginHorizontal as mh} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileInfo from "../components/ProfileInfo";

function IDcard2({navigation}) {
  
    return (
      <View style={{flex:1,}}>
      <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
      <Icon name="list-outline" color='white' size={20} />
        <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
      </TouchableOpacity>
      <ScrollView>
      
      <View style={styles.container}>
      <View style={
        {backgroundColor:'#f2f2f2', marginTop:210,width:wp('100%'), 
        height:hp('100%'), elevation: 3, position:'absolute'}}></View>

        <View style={styles.profileview}>
          <Image                 
                style={{ 
                  borderRadius:40,width:wp('18%'), height:hp('11%'), alignSelf:'center',
                  marginLeft:10
                  }}
                source={require('../images/syed.jpg')}/>
          <ProfileInfo/>
                
        </View>

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
      </ScrollView>
      </View>
    );
  
}
export default IDcard2;

const styles = StyleSheet.create({
  container: {
    
    justifyContent:'flex-start',    
    backgroundColor: '#00994d',
    textAlignVertical: 'top',
    
    
  },
  matric: {
    marginBottom:20,
    marginTop:20,
    alignSelf:'center',
    alignItems: 'center',
    backgroundColor :'#ffffff',
    width:wp('90%'),
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
    elevation: 4,
        
    
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
  },
  profileview:{
    flexDirection:'row',
    alignSelf:'center',
    width:wp('90%'),
    height:hp('20%'),
    marginTop:20,
    backgroundColor:'#ffffff',
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
  },
  header:{
    flexDirection:'row',
    width:wp('100%'), height:hp('8%'), backgroundColor:'#00994d',
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
    alignItems:'center',
    paddingHorizontal:22
  }
});