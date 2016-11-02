var app = angular.module('BasicRoute', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        template:'Welcome user!'
    })
    .when('/anotherPage', {
        template:'Welcome Again User!'
    })
    .when('/urlPage', {
        templateUrl:'hello.html'
    })
    .when('/urlPage2',{
        templateUrl:'hello2.html'
    })
    .otherwise({
        redirectTo: '/'
    })
        
});