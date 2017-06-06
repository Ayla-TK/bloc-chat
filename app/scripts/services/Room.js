(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    var rooms = $firebaseArray(ref);

   
    Room.all = rooms; 
    
    Room.create = function(newRoom) {
        rooms.$add(newRoom).then(function(ref) {
        console.log(ref);
        
        });
    }
  
  return Room;
}
  

angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();