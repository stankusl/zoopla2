(function() {
  angular.module('application').factory('SearchServices', ['$rootScope', '$http', '$q', '$log', SearchServices]);

  function SearchServices($rootScope, $http, $q, $log) {

      var fallbackEndpoint = "/api";


      return {
          searchPropertiesByPostcode: searchPropertiesByPostcode
      };


      function searchPropertiesByPostcode(postcode) {

          var deferred = $q.defer();
          $http({
                  method: "GET",
                  url: pictureEndpoint,
              })
              .then(function(response) {
                  deferred.resolve(response.data);
              })
              .catch(function(response) {
                  $log.error('Error retrieving image data from proxy: ' + status);
                  deferred.reject('Error retrieving current user data');
              });
          return deferred.promise;
      }



}
})();
