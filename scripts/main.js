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
