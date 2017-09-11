(function() {
    function HomeCtrl(Task) {
      this.tasks = Task.all;
      // this.currentUser = $cookies.get('blocitOffCurrentUser') make this later using uicookies.


    }

    angular
        .module('blocitOff')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
