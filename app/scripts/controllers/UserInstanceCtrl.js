(function() {
    function UserInstanceCtrl($uibModalInstance) {
 
       this.ok = function() {
            $uibModalInstance.close(this.username);
        };
      
      
 
 
         
 
        
    }
    
 
 
    angular
        .module('blocChat')
        .controller('UserInstanceCtrl', ['$uibModalInstance', UserInstanceCtrl]);
})();