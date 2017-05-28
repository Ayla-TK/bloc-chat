(function() {
    function HomeCtrl(Room, $uibModal) {
        this.heroTitle = "Let's Chat!";
        this.chatRooms = Room.all;
      
       
        
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();