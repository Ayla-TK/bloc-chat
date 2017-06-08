(function() {
    function ModalInstanceCtrl($uibModalInstance) {
 
       this.create = function() {
            $uibModalInstance.close(this.name);
        };
      
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
 
 
         
 
        };
    }
    
 
 
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
