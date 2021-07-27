
  var firebaseConfig = {
      apiKey: "AIzaSyBH4XpZk2MLgz1nEt4wqUnAcjCDYDHnek8",
      authDomain: "kwitter-a1030.firebaseapp.com",
      databaseURL: "https://kwitter-a1030-default-rtdb.firebaseio.com",
      projectId: "kwitter-a1030",
      storageBucket: "kwitter-a1030.appspot.com",
      messagingSenderId: "193467994216",
      appId: "1:193467994216:web:0b195c44e659f8ceecabdd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location = "index.html";
}
function addRoom() {
      room_name = document.getElementById("room_name").value ;
      localStorage.setItem("room_name", room_name);
      window.location = "";
  }