var firebaseConfig = {
      apiKey: "AIzaSyCuYV1MVx7trP9YO3UCC-5KIZwuJ76qF4I",
      authDomain: "shareit-f4aff.firebaseapp.com",
      databaseURL: "https://shareit-f4aff-default-rtdb.firebaseio.com",
      projectId: "shareit-f4aff",
      storageBucket: "shareit-f4aff.appspot.com",
      messagingSenderId: "745020768434",
      appId: "1:745020768434:web:897a2d630f377b50a9c9ab"
    };
    
    
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
   

function getData() 
{
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {

     
     
     firebase_message_id= childKey;
     message_data = childData;

     console.log(firebase_message_id);
     console.log(message_data);
     Name = message_data['name'];
     message = message_data['message'];
     like = message_data['like'];
     name_with_tag = "<h4>"+ Name +"<img class='user_tick' src='tick.png'></h4>";
     message_with_tag = "<h4 class='message_h4>" + message + "</h4>";
     like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLIKE(this.id)'>";
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";


     row = name_with_tag + message_with_tag +like_button + span_with_tag;
     document.getElementById("output").innerHTML += row;
     } });});}
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      });
      document.getElementById("msg").value = "";
}

function updateLIKE(message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      like= document.getElementById(button_id).value;
      updated_like= Number(likes);
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
           like : update_likes 
      })
}

function logout()
{
localStorage.removedItem("user_name");
localStorage.removedItem("room_name");
window.location.replace("kwitter.html");
}
