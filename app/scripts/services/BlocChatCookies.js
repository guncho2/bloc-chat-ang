
// (function() {
//     function BlocChatCookies($cookies, $uibModal) {
//         var currentUser = $cookies.get('blocChatCurrentUser');
//         if (!currentUser || currentUser === '') {
//             $uibModal.open({
//                 templateUrl: '/templates/login.html',
//                 size: 'sm',
//                 controller: 'ModalCtrl as modal',
//                 keyboard: false,
//                 backdrop: 'static'
//             });
//         }
//     }
//
//     angular
//         .module('blocChatAng')
//         .run(['$cookies', '$uibModal', BlocChatCookies]);
// })();
