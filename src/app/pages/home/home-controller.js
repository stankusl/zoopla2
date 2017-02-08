(function() {
    'use strict'
    angular.module('application').controller('HomeController', ['HomeServices', '$scope', HomeController]);

    function HomeController(HomeServices, $scope) {
        // Controller Variables
        self = this;
        self.loading = false;
        self.properties = [];
        self.isSearchSuccess = true;
        self.results = false;




        this.searchAPI = function(postcode) {
            self.loading = true;
            HomeServices.searchPropertiesByPostcode(postcode).then(
              function(result) {
                  self.properties = result;
                  self.loading = false;
                  self.results = true;
              },
              function(err) {
                self.loading = false;
                self.isSearchSuccess = false;
                console.log('Error retrieving from endpoint: ', err);
            });

        }

    };


})();
