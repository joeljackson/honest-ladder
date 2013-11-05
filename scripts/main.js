angular.module("PingPong", ["firebase"]);
angular.module("PingPong").controller("PlayersController", function($scope, angularFire){
  var url = 'https://honest-ladder.firebaseio.com/';
  var ref = new Firebase(url);
  $scope.data = {
    players: []
  }
  angularFire(ref, $scope, 'data');

  $scope.addUser = function() {
    $scope.data.players.push({name: $scope.newUserName});
  };
});
