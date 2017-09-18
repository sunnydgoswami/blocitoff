(function() {
    function CompletedCtrl(Task) {
      this.tasks = Task.all;

      this.moveTaskToExpired = function(task) {
        task.done = 'expired';
        this.tasks.$save(task);
      };
    }

    angular
        .module('blocitOff')
        .controller('CompletedCtrl', ['Task', CompletedCtrl]);
})();
