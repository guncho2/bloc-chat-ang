(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
    }

    angular
        .module('blocChatAng')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
