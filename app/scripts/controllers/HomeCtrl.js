(function() {
    function HomeCtrl(Task, $uibModal) {
      this.tasks = Task.all;
      this.currentTask = null;
      // this.currentUser = $cookies.get('blocitOffCurrentUser') make this later using uicookies.

      this.openNewTask = function () {
          $uibModal.open({
              templateUrl: 'templates/modal.html',
              size: 'lg',
              controller: 'ModalCtrl as modal'
          });
      }

      this.storeTaskName = function (task) {
        this.currentTask = task;
      }

      this.isCollapsed = true;
      this.status = {
        isopen: false
      }

    }

    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['Task', '$uibModal', HomeCtrl]);
})();
