import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol} from 'react-native-responsive-screen';

import Startbutton from './startbutton';
import Scanbutton from './Scanbutton';

export default class Record extends Component{

    componentDidMount() {
        loc(this);
      }
      
      componentWillUnMount() {
        rol();
      }
      
    render(){
        return(
            <ScrollView>
            
            <View style={styles.classtext}>

            <Text style=
                {{fontSize:25, fontWeight:'300', marginVertical:20, color:'#666666'}}>
                    Start Class
            </Text>
            <Image
                    style={{ width:wp('30%'), height:hp('20%')}}
                    source={require('../images/QR.png')}/>
            <Startbutton/>
            
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        height:hp('100%'),
        backgroundColor:'#ffffff',
        alignItems: 'center',
    },
    textedit:{ 
        flexDirection:'row',
        borderBottomWidth:0.4,
        width:wp('90%'),
        marginVertical:5,   
        paddingVertical:15,
        
    
      },
      button:{
        justifyContent:'center',
        backgroundColor :'#1c313a',
        borderRadius :4,
        paddingVertical:10,
        marginTop:10, 
        width :wp('90%'),
    
       },
       loginbutton:{
        
        justifyContent:'center',
        textAlign:'center',       
        fontSize:16,
        fontWeight:'500',
        color: '#ffffff'
                
   },
});