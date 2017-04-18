$stateProvider
  .state('main', {
  url: '/',
})
        
  angular
    .module('blocChat',['ui.router'], ['firebase'])
    .config(config);

 })();


