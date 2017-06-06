(function() {
    function HomeCtrl(Room, $uibModal) {
        this.heroTitle = "Chat like it's 1999!";
        this.chatRooms = Room.all;
      
       
        
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();