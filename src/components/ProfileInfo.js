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
import Icon from 'react-native-vector-icons/Ionicons';


function ProfileInfo({navigation}){
    
        return(
            <View style={{flex:1}}>
                <TouchableOpacity style={styles.header} onPress={() => navigation.openDrawer()}>
            <Icon name="reorder-four-outline" color={'#ffffff'} size={20} />
                <Text style={{fontSize:20, fontWeight:'bold', color:'#ffffff', marginHorizontal:15}}>Digital Matric</Text>
            </TouchableOpacity>
            
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
            </View>
        )
    
}

export default ProfileInfo;

const styles=StyleSheet.create({
    header:{
        flexDirection:'row',
        width:wp('100%'), height:hp('8%'), backgroundColor:'#199591',
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