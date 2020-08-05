import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import auth from '@react-native-firebase/auth';
import Logo from './profilephoto';
const ProfilePage =() =>{
    return(
     

     
    <View style={styles.container}> 
   
      <View style={styles.backprofile}>
      
      </View>
      <Logo/>
    
        <View style={styles.backprofile2}>
          
          <TouchableOpacity style={styles.logout} onPress={()=> auth().signOut()} >
              <Text style={{color:'white',}} >Logout</Text>
          </TouchableOpacity>
        </View>
       
    </View>)
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,
    backgroundColor:'#1e272e',
    alignItems:'center',
    width:wp('100%')
  },
  text: {
    color:'white',
  },
  logout: {
    marginTop:2,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'#ff7675',
    width:wp('80%'),
    borderRadius: 10,
  },
  backprofile:{
    height:500,
    position:'absolute',
    backgroundColor:'white',
    padding:150,
    paddingHorizontal:170,
    marginTop:100,
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
  backprofile2:{
    alignItems :'center',
    backgroundColor:'white',
    padding:200,
    paddingVertical:400,
    marginTop:50,
    
  }
 

  });
export default ProfilePage;