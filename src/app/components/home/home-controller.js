(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['HomeServices', '$scope', HomeController]);

    function HomeController(HomeServices, $scope) {
        // Controller Variables
        self = this;
        self.loading = true;

        self.properties = [];

        HomeServices.getAllPropertiesMock().then(
            function(result) {
                // Get Image From proxy
                self.properties = result;
                self.loading = false;
            },
            function(err) {
              console.log('Error retrieving from endpoint: ', err);
          });

    };


})();
