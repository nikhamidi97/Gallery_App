import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  TextInput, View, ScrollView, Text, StyleSheet, 
  TouchableOpacity, Button, Alert, FlatList } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class PhotoList extends Component{

    static PropTypes ={
        photoList: PropTypes.array.isRequired
    };

    render(){
        return(
            <ScrollView>

                    <FlatList
                    data={this.props.photoList}
                    keyExtractor={( index) => index.toString()}
                    renderItem={( item) => (
                        console.log(item.url),
                        <TouchableOpacity 
                        style={styles.box} 
                        onPress={()=>{
                        
                        }}>
                        <Image source={{uri:item.url}}  />
                        </TouchableOpacity>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    
                    />
            </ScrollView>
                
        )
        
    }
}

const styles = StyleSheet.create({
  box:{
    margin:2,
    width:wp('32%'),
    height:hp('18%'),
    backgroundColor:'#b3b3b3'
  }
  });