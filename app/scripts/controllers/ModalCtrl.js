(function() {
    function ModalCtrl($uibModal, Room) {
      
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
    }
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})()