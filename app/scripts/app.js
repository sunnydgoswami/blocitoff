(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
            .state('completed', {
                url: '/completed',
                controller: "CompletedCtrl as completed",
                templateUrl: "/templates/completed.html"
            })
            .state('destructed', {
                url: '/destructed',
                controller: "DestrutedCtrl as destructed",
                templateUrl: "/templates/destructed.html"
            })
    }

    angular
        .module('blocitOff', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();
