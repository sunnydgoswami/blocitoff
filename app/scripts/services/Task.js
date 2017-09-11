(function() {
    function Task($firebaseArray) {
        var Task = {};

        var ref = firebase.database().ref().child("Tasks");
        var tasks = $firebaseArray(ref);

        Task.all = tasks;

        return Task;
    }

    angular
        .module('blocitOff')
        .factory('Task', ['$firebaseArray', Task]);
})();
