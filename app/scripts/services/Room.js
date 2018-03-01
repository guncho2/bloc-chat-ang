(function() {
  function Room($scope, $firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
$scope.rooms = Room.all;
    return Room;
  }

  angular
    .module('blocChatAng')
    .factory('Room', ['$firebaseArray', Room]);
})();
