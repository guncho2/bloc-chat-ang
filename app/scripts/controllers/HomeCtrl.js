
//How can I display my queried
//Rooms in the view?*
(function() {
  //Create a controller and
  //associate it with the home
  // template in a $state. Inject
  // the Room service so that you
  // can /assign the array of objects
//retrieved by the allmethod to a
// $scope variable. Display the
// rooms in the template using
//ngrepeat
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;
      this.currentRoom = null;
      this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
        this.sendMessage = function () {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            Message.send(this.newMessage);
        }
    }

    angular
        .module('blocChatAng')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
