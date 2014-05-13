'use strict';

angular.module('borgTodosAngularApp')
  .controller('MainCtrl', function ($scope, $resource) {
    var Todo = $resource('/api/todos.json');
    $scope.todos = Todo.query();

    $scope.saveTodo = function(newTodo) {
      Todo.save(newTodo, function (todo) {
        $scope.todos.push(todo);
        $scope.newTodo = {};
      });
    };
  });
