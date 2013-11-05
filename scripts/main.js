angular.module("PingPong", ["firebase"]);
angular.module("PingPong").controller("PlayersController", function($scope, angularFire) {
    var url = 'https://honest-ladder.firebaseio.com/';
    var ref = new Firebase(url);

    $scope.data = {
        players: [],
        matches:[]
    };

    angularFire(ref, $scope, 'data');

    $scope.addUser = function() {
        $scope.data.players.push({name: $scope.newUserName});
    };

    $scope.addMatch = function() {
        var selectedPlayers = _.filter($scope.data.players, function(player) { return player.selected;});
        var player1 = selectedPlayers[0];
        var player2 = selectedPlayers[1];
        player1.inMatch = true;
        player2.inMatch = true;

        $scope.data.matches.push({player1: player1, player2: player2});
    };

    $scope.selectWinner = function(match, player) {
        console.log(match, player, 'woot he won');
    };
});

angular.module('PingPong').directive('inputDisabled', function($parse){
  return {
    restrict: "A",
    link: function(scope, element, attributes, controller){
      scope.$watch("scope.player", function(newValue, oldValue){
        if(_.filter(scope.$parent.data.players, function(player){ return player.selected;}).length >= 2 &&
           !scope.player.selected){
          element.attr('disabled', 'true');
        } else {
          element.removeAttr('disabled');
        }

      }, true);
    }
  }
});
