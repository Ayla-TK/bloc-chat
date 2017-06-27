(function() {
    function HomeCtrl(Room, Message, $cookies) {
        this.heroTitle = "Chatting like it's 1999!";
        this.chatRooms = Room.all;
        this.currentRoom = null;
        this.messages= null;
      
      this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
      
      this.send = Message.send; 
 }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies',  HomeCtrl]);
})();