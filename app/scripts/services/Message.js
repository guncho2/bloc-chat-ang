(function() {
    function Message($firebaseArray, $cookies, Room) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Message.all = messages;

        Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }

        Message.send = function (newMessage) {
           messages.$add(newMessage);
           newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
         }

        return Message;
    }

    angular
        .module('blocChatAng')
        .factory('Message', ['$firebaseArray', '$cookies', 'Room', Message]);
})();
