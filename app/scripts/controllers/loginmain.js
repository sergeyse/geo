'use strict';

angular.module('ispanApp')
  .controller('LoginmainCtrl',['$scope','simpleLogin','$location', function ($scope,simpleLogin,$location) {

/*simpleLogin.$login('password',{
    email:'sergiy@simnet.is',
    password:'1234'
}).then(function(user){
    console.log("logged in as", user.uid,user.email);
},function(error){
    console.log("Login Failed",error);
});*/

//        ----------------- connection check is not working sinse we need a google map download first and then bootstrap an angular --------------
        var connectedRef = new Firebase("https://incandescent-fire-7211.firebaseio.com/.info/connected");
        connectedRef.on("value", function(snap) {
            if (snap.val() === true) {

                $scope.online =false;
            } else {

            }
        });

//        ----------------- END connection check is not working sinse we need a google map download first and then bootstrap an angular --------------


        $scope.login= function (){
            simpleLogin.$login('password',{
                email:$scope.inputEmail,
                password:$scope.inputPassword
            }).then(function(user){
                console.log("logged in as", user.uid,user.email);
                $location.path('/googleMap/')

            },function(error){
                $scope.error = error;
                console.log("Login Failed",error);
                $scope.loginfaile= true;
            });

        }


  }]);
