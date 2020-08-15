// import React, { Component } from 'react';
// import { TextInput, View, ScrollView, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { FlatList} from 'react-native';

// export default class Search extends Component{


// render(){
 
// 	var imagesearch = [];

// 	for(let i = 0; i < 5; i++){

// 		imagesearch.push(
// 			<View key = {i}>

//         <View style={styles.mainbg}>
//           <TouchableOpacity style={styles.box}/>
//           <TouchableOpacity style={styles.box}/>
//           <TouchableOpacity style={styles.box}/>
//         </View>
              
// 				</View>		
// 		)
// 	}
	
// 	return (
// 		<View style={{flex:1}}>
//     <View style={{flexDirection:'row'}}>
//     <TextInput style={styles.inputBox} 
//                 placeholderTextColor="#595959"              
//                 secureTextEntry={true}
//                 underlineColorAndroid='rgba(0,0,0,0)'
//                 placeholder="Search"                               
//                 />
//     <Icon style={{marginHorizontal:20}} name='search' size={40} color='blue' />
//     </View>	
//     <ScrollView>	
// 			{ imagesearch }
//       </ScrollView>	
// 		</View>
// 	)
// }
// }

// const styles = StyleSheet.create({
//   inputBox :{
//     width :wp('80%'),
//     borderBottomWidth:0.4,
//     paddingHorizontal: 10,
//     fontSize: 18,
//     color: '#ffffff',
//     marginVertical:3,
//     marginHorizontal:5
// },
// mainbg:{
//     flexDirection:'row',
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// box:{
//   margin:2,
//   width:wp('32%'),
//   height:hp('18%'),
//   backgroundColor:'blue'
// }
// })

import React, { Component } from 'react';
import { 
  TextInput, View, ScrollView, Text, StyleSheet, 
  TouchableOpacity, Button, Alert, FlatList, Image, ListView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {addImage, getImage} from '../services/firebase';
import * as firebase from 'firebase';
import {db} from '../config/database';
import {PhotoList} from '../model/imageList';
//import all the components we will need


let photoRef = db.ref('/photos/photoList');

export default class Search extends Component {
  
  constructor(props){
    super(props);
    this.state = {
    photoList: [],
    }
  }
 

  componentDidMount() {
    photoRef.on('value', (snapshot)=>{
      // let data = snapshot.val();
      var item =[];
      snapshot.forEach((child) => {
        item.push({
          url : child.val().url
        })
      });
      this.setState({ photoList: item});
   
    });
  }

  render() {
    return (
 
        <View style={styles.MainContainer}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:30, color:'#4d4d4d', marginVertical:10}}>Discover</Text>
        
      </View>	
            <ScrollView>

                <FlatList
                data={this.state.photoList}
                keyExtractor={(item)=>item.key}
                renderItem={({item}) => {return(
                  console.log(item.url),
                  <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=>{
                    
                    }}>
                      <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                     
                        <Image  style={styles.box} 
                          source={{uri:item.url}}  />
                      </View>
                      
                    
                  </TouchableOpacity> 
                  
                )}}
              
                //Setting the number of column
                numColumns={3}

                />
            </ScrollView>

                            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
    
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  inputBox :{
    width :wp('80%'),
    borderBottomWidth:0.4,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#ffffff',
    marginBottom:3,
    marginHorizontal:5
},
mainbg:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
},
box:{
  margin:2,
  width:wp('32%'),
  height:hp('18%'),
  backgroundColor:'#b3b3b3'
}
});



