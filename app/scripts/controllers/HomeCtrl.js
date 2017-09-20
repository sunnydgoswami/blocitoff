(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.all;
      this.currentTask = null;

      this.totalTasks = function() {
        return this.tasks.length;
      };

      this.remaining = function() {
        return _.filter(this.tasks, function(task) {
          return !task.done;
        }).length;
      };

      this.totalCompleted = function() {
        return _.filter(this.tasks, function(task) {
          return task.done;
        }).length;
      };

      this.toggleDone = function(task) {
        task.done = !this.done; //change the names up
        this.tasks.$save(task);
      };


      //change to seven days after testing
      this.expireTask = function(task) {
        var days = 24 * 60 * 60 * 1000
        if (task.done == false && (Date.now() - task.startedAt) >= (7 * days)) {
          task.done = "expired";
          this.tasks.$save(task);
        };
      };


      this.createTask = function() {
        Task.add({
          name: this.newTask,
          // priority: 'regular',
          done: false, //status instead of done or soemthing
          startedAt: Date.now()
        });
        this.newTask = {name: "" };
      };

      this.moveTaskToExpired = function(task) {
        if (task.done == false) {
          task.done = 'expired';
          this.tasks.$save(task);
        };
      };

      this.storeTaskName = function (task) {
        this.currentTask = task;
      };

      this.isCollapsed = true;
      this.status = {
        isopen: false
      };

    }

    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
