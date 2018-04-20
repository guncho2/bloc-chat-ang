(function() {
//Use Firebase's child() method (called
// on an instance of its API object)
//to either
//query an existing set of data or
//reference one you intend to populate
//with data in the future. Use the
//$firebaseArray service to ensure the
//data is returned as an array:
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
//How do I create Room objects with
//AngularFire?*

//You can call AngularFire's $add()
//on any array created or retrieved
//with the  $firebaseArray service.
//In this case, the array is the data
//stored in the rooms variable in the
//Room service. Use the AngularFire
//method $add() inside a Room factory
//method add. This will give the
//application the ability to add
//rooms to the firebase database.
//You don't want AngularFire specifics
// leaking into the rest of our
//application. To avoid this leaking,
// we will create an abstract method
//in the service. This may seem like
//unnecessary duplication of another
//add method, but this purposeful
//abstraction will create a nice
//barrier between AngularFire and the
// application's controllers. This is
//the main purpose for creating this
//service and a foundation for decoupled
//code
    Room.all = rooms;
    Room.add = function (room){
      rooms.$add(room);
    };
    return Room;
  }

  angular
    .module('blocChatAng')
    //How can I query a list of Rooms
    //from Firebase?*
    //Create a Room factory in Angular
    //that defines all Room-related API queries.
    //Create a reference to your Firebase
    //database inside, and inject
//the $firebaseArray service provided by
//AngularFire
    .factory('Room', ['$firebaseArray', Room]);
})();
