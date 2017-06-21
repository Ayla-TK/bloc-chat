(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
    
    var userInstance =  $uibModal.open({
                templateUrl: '/templates/username.html',
                controller: 'UserInstanceCtrl as userInstance'
            })
       userInstance.result.then(function(username) {
            $cookies.put('blocChatCurrentUser', username);
            
        })    
      }
    
   
    }
  

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();