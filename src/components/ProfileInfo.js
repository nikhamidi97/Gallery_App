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

export default class ProfileInfo extends Component{
    render(){
        return(
            <View style={{marginHorizontal:17, marginVertical:10}}>
                <Text style={{fontSize:12, fontWeight:'900',marginTop:5}}>
                    SYED MOHAMAD ARIF BIN SAYED MOHD
                </Text>
                <Text style={{fontSize:12, fontWeight:'900',}}>
                    ALI SAIPUDDIN
                </Text>

                <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
                    KULLIYYAH OF INFORMATION TECHNOLOGY
                </Text>

                <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
                    BIT
                </Text>

                <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
                    Syedarifjr@gmail.com
                </Text>
                
                <Text style={{fontSize:12, fontWeight:'900', marginTop:5}}>
                    4th YEAR
                </Text>
            </View>
        )
    }
}