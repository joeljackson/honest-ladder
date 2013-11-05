angular.module("PingPong", []);
angular.module("PingPong").controller("PlayersController", function($scope){
  $scope.players = ['Bob', 'Jim'];
});
