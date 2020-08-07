import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';


export default class Logo extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Image
                    style={{ width:50, height:100}}
                    source={require('../images/logo.png')}/>
                    <Text style={styles.matric}>
                    DIGITAL MATRIC CARD</Text>
            </View>
         
        )
    }

}

const styles = StyleSheet.create({
    
    container : {
        flex: 1,       
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop:10,
        marginBottom:70,
    },

    matric :{
        paddingTop:10,
        color:'#ffffff', fontSize:18
    
      }
    
})