(function() {
    function HomeCtrl(Room) {
        this.heroTitle = "Let's Chat!";
        this.chatRooms = Room.all;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();