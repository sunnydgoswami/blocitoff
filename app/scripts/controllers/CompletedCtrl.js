(function() {
    function CompletedCtrl(Task) {
      this.tasks = Task.all;
    }

    angular
        .module('blocitOff')
        .controller('CompletedCtrl', ['Task', CompletedCtrl]);
})();
