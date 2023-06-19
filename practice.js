const firebaseConfig = {
    apiKey: "AIzaSyAPsQMbvqvC5d_jYIUqO9adodfPc4yAmrI",
    authDomain: "kwitter-c061d.firebaseapp.com",
    databaseURL: "https://kwitter-c061d-default-rtdb.firebaseio.com",
    projectId: "kwitter-c061d",
    storageBucket: "kwitter-c061d.appspot.com",
    messagingSenderId: "356894525268",
    appId: "1:356894525268:web:d4ff97dec8a18ff048aac1",
    measurementId: "G-Y0R4XZE1S8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser()
  {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"addinguser"
    });
  }
