// Invoke angular and connect it to your application's name with the module method.
//Include ui.router and firebase as dependencies.
(function() {
//Add a configuration function and pass it to the angular config method and
//inject the $stateProvider and $locationProvider. Use the providers to define
//your first state which will hold the main view for the application.
  function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }

     angular
         .module('blocChatAng', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
         .config(config);

 })();
