(function() {
    'use strict'
    angular.module('application').controller('SearchController', ['SearchServices', '$scope', SearchController]);

    function SearchController(HomeServices, $scope) {
        // Controller Variables
        self = this;
        self.loading = true;

        self.properties = [];

        SearchServices.getAllPropertiesMock().then(
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
