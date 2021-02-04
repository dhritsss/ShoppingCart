import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";
import "firebase/firestore";
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyD2ytpjxNT6V5ZnC51L29kOvVXe7vaP3tQ",
  authDomain: "shop-cart-73342.firebaseapp.com",
  projectId: "shop-cart-73342",
  storageBucket: "shop-cart-73342.appspot.com",
  messagingSenderId: "564643325673",
  appId: "1:564643325673:web:0522cfccd37ee8f25b3278"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
export default firebase;
