(function() {
  function Message($firebaseArray, $cookies, $filter) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }
   
     Message.send = function (newMessage, roomId) {
      var date = new Date(); 
      var dateFilter = $filter('date');
      var filterDate = dateFilter(date, 'shortTime');
       
      messages.$add({
        username: $cookies.get('blocChatCurrentUser'),
        content: newMessage,
        sentAt: filterDate,
        roomId: roomId.$id
      });

    
    };
  return Message;
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();