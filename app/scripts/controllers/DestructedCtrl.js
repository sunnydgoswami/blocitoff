(function() {
    function DestructedCtrl(Task) {
      this.tasks - Task.all
    }

    angular
        .module('blocitOff')
        .controller('DestructedCtrl', ['Task', DestructedCtrl]);
})();
