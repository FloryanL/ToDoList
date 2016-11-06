/* permet d'éviter les variables globales */
'use strict';

/* Déclaration de l'application demoApp */
var demoApp = angular.module('demoApp', [
    'todoList'
]);

var todoList = angular.module('todoList', []);

todoList.controller('TodoCtrl', ['$scope',
    function ($scope) {
    }
]);