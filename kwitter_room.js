
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDHoVgQ7MJEXcHrcEm73W6OsmUrxAc8Pu8",
      authDomain: "kwitter-ecdfe.firebaseapp.com",
      databaseURL: "https://kwitter-ecdfe-default-rtdb.firebaseio.com",
      projectId: "kwitter-ecdfe",
      storageBucket: "kwitter-ecdfe.appspot.com",
      messagingSenderId: "821378940438",
      appId: "1:821378940438:web:dda16e7b915b9872cb7f37"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome "+ user_name+" !";
     
   function addRoom(){

      room_name=document.getElementById("room_name").value;
      
      localStorage.setItem("room name", room_name);
      window.location="kwitter_page.html";
      firebase.database().ref("/").child(room_name).update({
                  purpose:"add room name"
      
      });
          }


function getData() { 
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
      Room_names = childKey; 
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
     document.getElementById("output").innerHTML += row;
     }); 
    }); }
    getData();
    
    function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
    }
  
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
  