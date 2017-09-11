(function() {
    function Task($firebaseArray) {
        var Task = {};

        var ref = firebase.database().ref().child("Tasks");
        var tasks = $firebaseArray(ref);

        Task.all = tasks;

        Task.add = function(task) {
            tasks.$add(task)
        }

        return Task;
    }

    angular
        .module('blocitOff')
        .factory('Task', ['$firebaseArray', Task]);
})();
