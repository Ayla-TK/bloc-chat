(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }
   
     Message.send = function (newMessage, roomId) {

      messages.$add({
        username: $cookies.get('blocChatCurrentUser'),
        content: newMessage,
        sent_at: firebase.database.ServerValue.TIMESTAMP,
        roomid: roomId
      });

    
    };
  return Message;
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();