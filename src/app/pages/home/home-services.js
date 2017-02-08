(function() {
  angular.module('application').factory('HomeServices', ['$rootScope', '$http', '$q', '$log', HomeServices]);

  function HomeServices($rootScope, $http, $q, $log) {

      // Proxy to bypass Browser CORS protection
      var endpointUrl = $rootScope.webAPI + '/zoopla/';

      return {
          searchPropertiesByPostcode: searchPropertiesByPostcode
      };


      function searchPropertiesByPostcode(postcode) {

          var deferred = $q.defer();
          $http({
                  method: "GET",
                  url: endpointUrl + postcode,
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
