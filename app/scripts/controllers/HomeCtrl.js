(function() {
    function HomeCtrl(Room) {
      this.roomData = Room.all;
    }

    angular
        .module('blocChatAng')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
