'use strict';

angular.module('ispanApp')
  .controller('GeoeditCtrl',[ '$scope','$routeParams','$firebase','geoURL','$location','currentUser',function ($scope,$routeParams,$firebase,geoURL,$location,currentUser) {

        if (!currentUser){
            $location.path('/loginmain');
        }
        var geoMarkerUrl = geoURL + $routeParams.geoId;
        $scope.geoMarker = $firebase(new Firebase(geoMarkerUrl)).$asObject();

        $scope.delete = function(){
//         -------------------  AHT check geoMarkerUrl otherwise we remove all records in a MAP ?--------------
           $firebase(new Firebase(geoMarkerUrl)).$remove().then(function(){
           $location.path('/googleMap/')
           });

        }
        $scope.save = function(){
            
        }



  }]);
