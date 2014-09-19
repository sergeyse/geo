'use strict';

angular.module('ispanApp', [

        'ngResource',

        'ngRoute',

        'firebase'




    ])
    .config(function ($routeProvider) {
        $routeProvider


            .when('/googleMap', {
                templateUrl: 'views/googlemap.html',
                controller: 'GooglemapCtrl',
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return    simpleLogin.$getCurrentUser();


                    }]
                }
            })
            .when('/geoedit/:geoId', {
                templateUrl: 'views/geoedit.html',
                controller: 'GeoeditCtrl',
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return    simpleLogin.$getCurrentUser();


                    }]
                }
            })
            .when('/geomark', {
                templateUrl: 'views/geomark.html',
                controller: 'GeomarkCtrl',
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return    simpleLogin.$getCurrentUser();


                    }]
                }
            })
            .when('/loginmain', {
                templateUrl: 'views/loginmain.html',
                controller: 'LoginmainCtrl'
            })
            .when('/',{
                templateUrl: 'views/loginmain.html',
                controller: 'LoginmainCtrl'


            })
            .otherwise({
                redirectTo: '/loginmain'
            });
    })

    .value('geoURL', 'https://incandescent-fire-7211.firebaseio.com/map/')





    .factory('simpleLogin', ["$firebaseSimpleLogin", function ($firebaseSimpleLogin) {
        var ref = new Firebase('https://incandescent-fire-7211.firebaseio.com/');
        console.log("login" + $firebaseSimpleLogin(ref));
        return $firebaseSimpleLogin(ref);
    }]);




