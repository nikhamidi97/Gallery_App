import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDKuFKfUZeueOA-gANfdKaNAvj_oWmy-MU",
    authDomain: "gallery-app-f6a6f.firebaseapp.com",
    databaseURL: "https://gallery-app-f6a6f.firebaseio.com",
    projectId: "gallery-app-f6a6f",
    storageBucket: "gallery-app-f6a6f.appspot.com",
    messagingSenderId: "279771231167",
    appId: "1:279771231167:web:be9dcc510c59ab3e7c670a",
    measurementId: "G-GGQYLFJBNB"
};

let app = firebase.initializeApp(config);
export const db = app.database();