(function() {
    function HomeCtrl($scope, Task, $uibModal) {
      this.tasks = Task.all;
      // this.currentUser = $cookies.get('blocitOffCurrentUser') make this later using uicookies.

      this.open = function () {
          $uibModal.open({
              templateUrl: 'templates/modal.html',
              size: 'lg',
              controller: 'ModalCtrl as modal'
          });
      };

    }

    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['$scope', 'Task', '$uibModal', HomeCtrl]);
})();
