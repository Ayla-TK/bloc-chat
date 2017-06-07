(function() {
    function HomeCtrl(Room, Message, $uibModal) {
        this.heroTitle = "Chatting like it's 1999!";
        this.chatRooms = Room.all;
        this.currentRoom = null;
      
      this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
       
        
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();