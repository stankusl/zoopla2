(function() {
  angular.module('application').factory('HomeServices', ['$rootScope', '$http', '$q', '$log', HomeServices]);

  function HomeServices($rootScope, $http, $q, $log) {

      // Proxy to bypass Browser CORS protection
      var pictureEndpoint = $rootScope.WebAPI + '/tigerspike';
      var fallbackEndpoint = "/api";


      return {
          getAllProperties: getAllProperties,
          getAllPropertiesMock: getAllPropertiesMock
      };


      function getAllProperties() {

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

      function getAllPropertiesMock() {

         var deferred = $q.defer();
         $http({
                 method: "GET",
                 url: fallbackEndpoint,
             })
             .then(function(response) {
                 deferred.resolve(response.data);
             })
             .catch(function(response) {
                 $log.error('Error retrieving current user data: ' + status);
                 deferred.reject('Error retrieving current user data');
             });
         return deferred.promise;
     }

}
})();
