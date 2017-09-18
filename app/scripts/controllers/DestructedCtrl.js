(function() {
    function DestructedCtrl(Task) {
      this.tasks = Task.all;

      this.removeTask = function(task) {
        this.tasks.$remove(task);
      };

    }

    angular
        .module('blocitOff')
        .controller('DestructedCtrl', ['Task', DestructedCtrl]);
})();
