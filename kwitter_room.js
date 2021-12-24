
const firebaseConfig = {
      apiKey: "AIzaSyCuYV1MVx7trP9YO3UCC-5KIZwuJ76qF4I",
      authDomain: "shareit-f4aff.firebaseapp.com",
      databaseURL: "https://shareit-f4aff-default-rtdb.firebaseio.com",
      projectId: "shareit-f4aff",
      storageBucket: "shareit-f4aff.appspot.com",
      messagingSenderId: "745020768434",
      appId: "1:745020768434:web:897a2d630f377b50a9c9ab"
    };
    
    
  firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
      

    }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_name);
      row = "<div class= 'room_name' id="+Room_names+"onclick='redirectToROomName(this.id)' >#"+ Room_name +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
} 

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
