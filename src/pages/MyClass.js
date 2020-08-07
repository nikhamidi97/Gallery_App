import React, { Component } from 'react';
import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class MyClass extends Component{
    render(){
        return(
            
            <View >
                <ScrollView >
            <View style={styles.classtext}>
            <View style={{marginBottom:10, marginTop:10,}}>
                <Text style={{fontWeight:'300', fontSize:25, color:'#595959'}}>My Class</Text>
            </View>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Chapter')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4024 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('Chapter')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4024 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('info4993')} title="info4993">
                    <Text style={styles.textedit}>
                        INFO 4993 - SEMESTER 2 2019/2020
                    </Text>
                </TouchableOpacity>
                </View>
                </ScrollView>

                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    classtext:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    textedit:{ 
        borderColor:'#595959',
        borderWidth:1,
        borderRadius:4,
        width:wp('95%'),
        paddingHorizontal:35,
        paddingVertical:20,
        marginVertical:5,   
        fontWeight:'900',
        color:'#595959', fontSize:18
    
      },
     
});