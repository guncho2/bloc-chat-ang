(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        var modal = this;
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };

        modal.createRoom = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };
        //modal.createUsername = function () {
        //    $cookies.put('blocChatCurrentUser', modal.username);
        //    $uibModalInstance.close();
      //  }
      }

  angular
      .module('blocChatAng')
      .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
