(function() {
    function ModalCtrl($uibModal, Room, $cookies) {
      
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            
            console.log('modal opened')
            
           
        modalInstance.result.then(function(name){
               this.room = name;
               Room.create(this.room);
               console.log(Room.all)
        })   
      }
      
      this.createUsername = function () {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModal.close(this.username);
        }  
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', '$cookies', ModalCtrl])
})()