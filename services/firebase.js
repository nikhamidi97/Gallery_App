import * as firebase from 'firebase';
import { db } from '../config/database';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export const addPhoto =  (url, matricno, major, year, status) => {
    db.ref('/photos').set({
        name: name,
        matricno: matricno,
        major: major,
        year: year,
        status: status
    }, () => Actions.ListScreen());
}



// let app = firebase.initializeApp(config);
// export const db=app.database();

// export function addImage(image, addComplete){

//     firebase.firestore()
//     .collection('photos')
//     .add({
//         category : image.category,
//         uid : image.uid,
//         price : image.price,
//         createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     }),then((snapshot) => snapshot.get())
//     .then((imageData)=> addComplete(imageData.data()))
//     .catch((error)=> console.log(error));


// }

// export function deleteImage(image, deleteComplete) {
//     console.log(image);
  
//     firebase.firestore()
//       .collection('photos')
//       .doc(image.id).delete()
//       .then(() => deleteComplete())
//       .catch((error) => console.log(error));
//   }

// export async function getImage(imageRetrived){

//     var imageList = [];

//     //get data from firebase

//     var snapshot = await firebase.firestore()
//     .collection('photos')
//     .get()

//     //push the data to the imagelist array

//     snapshot.forEach((doc)=>{
//         imageList.push(doc.data());
//     });

//     imageRetrived(imageList);
// }

// export function uploadImage(image, onImageUploaded, { updating }) {

//     if (image.imageUri) {
//       const fileExtension = image.imageUri.split('.').pop();
//       console.log("EXT: " + fileExtension);
  
//       var uuid = uuidv4();
  
//       const fileName = `${uuid}.${fileExtension}`;
//       console.log(fileName);
  
//       var storageRef = firebase.storage().ref(`photos/images/${fileName}`);
  
//       storageRef.putFile(image.imageUri)
//         .on(
//           firebase.storage.TaskEvent.STATE_CHANGED,
//           snapshot => {
//             console.log("snapshot: " + snapshot.state);
//             console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  
//             if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
//               console.log("Success");
//             }
//           },
//           error => {
//             unsubscribe();
//             console.log("image upload error: " + error.toString());
//           },
//           () => {
//             storageRef.getDownloadURL()
//               .then((downloadUrl) => {
//                 console.log("File available at: " + downloadUrl);
  
//                 image.image = downloadUrl;
  
//                 delete image.imageUri;
  
//                 if (updating) {
//                   console.log("Updating....");
//                   updateFood(image, onImagedUploaded);
//                 } else {
//                   console.log("adding...");
//                   addFood(image, onImageUploaded);
//                 }
//               })
//           }
//         )
//     } else {
//       console.log("Skipping image upload");
  
//       delete image.imageUri;
  
//       if (updating) {
//         console.log("Updating....");
//         updateFood(image, onImageUploaded);
//       } else {
//         console.log("adding...");
//         addFood(image, onImageUploaded);
//       }
//     }
//   }

//   export function updateImage(image, updateComplete) {
//     image.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
//     console.log("Updating food in firebase");
  
//     firebase.firestore()
//       .collection('photos')
//       .doc(image.id).set(image)
//       .then(() => updateComplete(image))
//       .catch((error) => console.log(error));
//   }