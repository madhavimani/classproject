//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBYNrpZv3hNSry5sD-UmJD5z4bWEcz0gf8",
      authDomain: "kwitter-716ad.firebaseapp.com",
      databaseURL: "https://kwitter-716ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-716ad",
      storageBucket: "kwitter-716ad.appspot.com",
      messagingSenderId: "74794188586",
      appId: "1:74794188586:web:a79aa23c299f9bd99fe853"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
   
    
    username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "WELCOME "+ username+"!";
function addroom(){
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("roomname",roomname);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name- "+Room_names);
row = "<div class='roomname' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}