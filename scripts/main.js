angular.module("PingPong", ["firebase"]);
angular.module("PingPong").controller("PlayersController", function($scope, angularFire){
  var url = 'https://honest-ladder.firebaseio.com/players';
  var ref = new Firebase(url);
  $scope.players = [];
  angularFire(ref, $scope, 'players');

  $scope.addUser = function() {
    $scope.players.push({name: $scope.newUserName});
  };
});
