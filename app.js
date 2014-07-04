var ROOT="";


define(
    [
        "angular",
        "services",
        "directives",
        "filters",
        "controllers"
    ],

    function BaseManager(angular,Services,Directives,Filters){
        var initialize = function () {

            var app = angular.module("myApp", ['ngRoute'],
                function($routeProvider,$locationProvider) {

                    $routeProvider.when('/', {

                        templateUrl: 'index.html'
                    });

                    $locationProvider.html5Mode(true);
                });

            Filters.initialize(app);

            app.factory(Services);
            app.directive(Directives);

            angular.bootstrap(document,["myApp"]);

        };
        return {
            initialize : initialize
        };
    });

