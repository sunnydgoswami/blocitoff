(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.all;
      this.currentTask = null;

      this.totalTasks = function() {
        return this.tasks.length;
      };

      this.toggleDone = function(task) {
        task.done = !task.done;
        this.tasks.$save(task);
      };


//change to seven days after testing
      this.expireTask = function(task) {
        var days = 24 * 60 * 60 * 1000
        if (task.done == false && (Date.now() - task.startedAt) >= (60 * 1000)) {
          task.done = "expired";
          this.tasks.$save(task);
        };
      };

//come back to later it is not access done value
      // this.totalCompleted = function(task) {
      //   var completed = [];
      //   if (this.tasks.done == true) {
      //     return completed.length;
      //   };
      //   // return  {
      //   //   return this.task.done == true;
      //   // }).length;;
      // };

      this.createTask = function() {
        Task.add({
          name: this.newTask,
          done: false,
          startedAt: Date.now()
        });
        this.newTask = {name: "" };
      };

      this.removeTask = function(task) {
        //how doo i move from this database/view to another upon removal
        // task.done = !task.done
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
