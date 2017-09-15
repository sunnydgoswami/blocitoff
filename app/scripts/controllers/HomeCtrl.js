(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.all;
      this.currentTask = null;
      // this.currentUser = $cookies.get('blocitOffCurrentUser') make this later using uicookies.

      this.totalTasks = function() {
        return this.tasks.length;
      };

      this.toggleDone = function(task) {
        task.done = !task.done;
        this.tasks.$save(task);
      };

//come back to later it is not access done value
      // this.totalCompleted = function() {
      //   return _.filter(this.tasks, function(task) {
      //     return this.task.done == true;
      //   }).length;;
      // };

      this.createTask = function() {
        Task.add({
          name: this.newTask,
          done: false
        });
        this.newTask = {name: "" };
      };

      this.removeTask = function(task) {
        this.tasks.$remove(task);
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
