angular.module("PingPong", []);
angular.module("PingPong").controller("PlayersController", function($scope){
  $scope.players = [{name:'Bob'}, {name:'Jim'}];

  $scope.addUser = function() {
    $scope.players.push({name: $scope.newUserName});
  };
});
