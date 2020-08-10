import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert, color } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

import Alertbutton from '../class pages/alertbutton';
import CreateClass2 from './CreateClass2';

function CreateClass ({navigation}){
    
        return(
            <View>
                <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
            <Icon name="list-outline" color='white' size={20} />
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
            </TouchableOpacity>
            <View>
            <ScrollView>
                <CreateClass2/>
            </ScrollView>
            </View>
            </View>
           
        )
    
}
export default CreateClass; 

const styles = StyleSheet.create({
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
    
})
