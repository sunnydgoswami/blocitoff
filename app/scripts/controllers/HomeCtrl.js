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

      this.createTask = function() {
        Task.add(this.newTask);
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





// (function() {
//     function HomeCtrl($scope, $firebaseArray) {
//         $scope.filterName = {};
//
//         var ref = firebase.database().ref().child("Tasks");
//         var sync = $firebaseArray(ref);
//
//         $scope.totalTask = function() {
//             return $scope.tasks.length;
//         };
//
//         $scope.toggleDone = function(item) {
//             item.done = !item.done;
//             $scope.tasks.$save(item);
//         };
//
//         $scope.addTodo = function(task) {
//             $scope.tasks.$add(task);
//             $scope.newItem = "";
//         };
//
//
//
//
//
//
//
//
//
//       // this.tasks = Task.all;
//       // this.currentTask = null;
//       // // this.currentUser = $cookies.get('blocitOffCurrentUser') make this later using uicookies.
//       //
//       // this.storeTaskName = function (task) {
//       //   this.currentTask = task;
//       // }
//
//       this.isCollapsed = true;
//       this.status = {
//         isopen: false
//       }
//
//     }
//
//     angular
//         .module('blocitOff')
//         .controller('HomeCtrl', ['$scope', '$firebaseArray', HomeCtrl]);
// })();
