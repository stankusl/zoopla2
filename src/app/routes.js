(function() {
    'use strict';

    angular.module('application')

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('search', {
            url: '/',
            templateUrl: './app/components/search/search-view.html',
            controller: 'SearchController',
            controllerAs: 'Search'
        })

        .state('homepage', {
            url: '/results',
            templateUrl: './app/components/home/home-view.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        })

        $urlRouterProvider.otherwise('/');
    }]);

})();
