(function() {
    'use strict';

    angular.module('application')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('homepage', {
            url: '/',
            templateUrl: './app/pages/home/home-view.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })

        $urlRouterProvider.otherwise('/');
    }]);

})();
