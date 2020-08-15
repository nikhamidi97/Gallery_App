import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity, Image,Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as firebase from 'firebase';

import { addPhoto } from '../services/firebase';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import * as Progress from 'react-native-progress';
const UploadForm = (props) => {
    var user = firebase.auth().currentUser;
    var uid;
    state={
        url:'',
        // category:'',
        // price:'',
        uid:'1',
        uuid:'',
    }



    const [image, setImage] = useState(null); //used to store the URI of the source of the image
    const [uploading, setUploading] = useState(false); //keep track of whether the image is uploading
    const [transferred, setTransferred] = useState(0); //track the progress of the image being upload.
   
    const pickImageHandler = () => {
        const options = {
            maxWidth: 2000,
            maxHeight: 2000,
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              console.log(source);
              setImage(source);
            }
          });
      }

      const uploadImage = async () => {
        const { uri } = image;
        const fileExtension = uri.split('.').pop();
        var uuid = uuidv4();
        const filename = `${uuid}.${fileExtension}`;
        setUploading(true);
        setTransferred(0);
        var storageRef = storage().ref(`photos/photoList/${filename}`);
        storageRef.putFile(uri)
            .on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                snapshot => {
                    setTransferred(
                        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
                      );
                    if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
                      console.log("Success");
                      setUploading(false);
                    }
                   
                },
                error => {
                    unsubscribe();
                    console.log("image upload error: " + error.toString());
                  },
                  () => {
                    storageRef.getDownloadURL()
                      .then((downloadUrl) => {
                        console.log("File available at: " + downloadUrl);
          
                        
                        setState(
                         this.state.url = downloadUrl,
                        this.state.uuid = filename
                        )
                        
                        
                        addPhoto( 
                            this.state.url,
                            // this.state.category,
                            // this.state.price,
                            this.state.uid,
                            this.state.uuid
                            );
          
                      })
                      Alert.alert(
                        'Photo uploaded!',
                        'Your photo has been uploaded to Firebase Cloud Storage!'
                      );
                      setImage(null);
                      
                  }
            )  
      }
       
      

        return (
            <View style={styles.container}>
                
                    {image !== null ? (
                    <Image source={{ uri: image.uri }} style={styles.imageBox} />
                    ) : null}
                    {uploading ? (
                    <View style={styles.progressBarContainer}>
                        <Progress.Bar progress={transferred} width={300} />
                    </View>
                    ) : (
                    <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                        <Text style={styles.buttonText}>Upload image</Text>
                    </TouchableOpacity>
                    )}
     

                
                 {/* <TextInput
                    placeholder="price" 
                    style={styles.input} 
                    value={this.state.price}
                    onChangeText={price=> this.setState({price})}
                     />

                 <TextInput 
                    placeholder="category" 
                    style={styles.input}
                    secureTextEntry
                     value={this.state.category}
                     onChangeText={category => this.setState({category})} */}
                     {/* /> */}


                 <TouchableOpacity  onPress={pickImageHandler} >
                 <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                    >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Pick Image</Text>
                </LinearGradient>
                 </TouchableOpacity>
                 <TouchableOpacity  onPress={uploadImage} >
                 <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                    >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Upload Image</Text>
                </LinearGradient>
                 </TouchableOpacity>
                 
            </View>
        );
    
}
export default UploadForm;

// define your styles
const styles = StyleSheet.create({
    uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#ffb6b9',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
    container: {
        
        padding:20
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    
    },
    errorText:{
        fontSize:25,
        color:'red',
        alignSelf:'center',
        marginTop:10

    },
    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },
    buttonContainer:{
        backgroundColor:'#3B3B98',
        padding:15,
        borderRadius:8
    },
    buttonAnom:{
        marginTop:20,
        padding:15,
        borderRadius:8
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageBox: {
        width: 300,
        height: 300
      }
    
});