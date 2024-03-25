//YOUR FIREBASE LINKS
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

     username=localStorage.getItem("username");
     roomname=localStorage.getItem("roomname");
     function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
messsage = message_data['message'];
like = message_data['like'];
finalname = "<h4> "+name+"<img class='user_tick' src='tick.png'> </h4>";
finalmessage = "<h4 class='message_h4'>"+ message +"</h4>";
likebutton = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
likesymbole = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row = finalname+finalmessage+likebutton+likesymbole;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function updateLike(message_id){
      buttonid = message_id;
      likes = document.getElementById(buttonid).value;
      updatedlikes = Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(roomname).child(message_id).update({ like : updated_likes });
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location.replace("index.html");
}