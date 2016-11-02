var app = angular.module('LoginApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Login.html'
    })
    .when('/dashboard', {
        resolve:{
            "check": function($rootScope,$location){
                if(!$rootScope.loggedIn)
                {
                    $location.path('/');
                }
            }
        },
        templateUrl: 'Dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function ($scope, $location,$rootScope) {
    $scope.submit = function () {
        var Uname = $scope.username;
        var password = $scope.password;
        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        }
        else {
            alert("Wrong Stuff");
        }
    };
});