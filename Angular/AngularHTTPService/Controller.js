var app = angular.module('HTTPService', []);
app.controller('people', function ($scope,$http) {
    $http.get('http://localhost:62708/people.json')
    .success(function (response) {
        $scope.persons = response.records;
    })

})