define(["config","angular","angular-ui-router"], function(config) {
    var app = angular.module("demoApp", ["ui.router"]);
    app.config(function($stateProvider, $controllerProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        var states = config.states;
        for(var i in states) {
            (function(stateName) {
                var stateNameParts = stateName.split('-');
                var controllerPath, url, templateUrl, controller;
                if (stateNameParts.length == 2) {
                    stateName = stateNameParts[0] + "." + stateNameParts[1];
                    controller = stateName;
                    url = "/" + stateNameParts[1];
                    templateUrl = "/static/views/" + stateNameParts[0] + "/" + stateNameParts[1] + ".html",
                    controllerPath = "/static/controllers/" + stateNameParts[0] + "/" + stateNameParts[1] + "Ctrl.js";
                } else {
                    stateName = stateNameParts[0];
                    controller = stateName;
                    url = "/" + stateNameParts[0];
                    templateUrl = "/static/views/" + stateNameParts[0] + ".html",
                    controllerPath = "/static/controllers/" + stateNameParts[0] + "Ctrl.js";
                }
                
                var state = {
                    name: stateName,
                    url: url,
                    templateUrl: templateUrl,
                    controller: controller,
                    resolve: {
                        loadCtrl: function($q) {
                            var defered = $q.defer();
                            require([controllerPath], function() {
                                defered.resolve();
                            })
                            return defered.promise;
                        }
                    }
                }
                $stateProvider.state(state);
            })(states[i]);
        }
        app.registerController = $controllerProvider.register;
    });
    return app;
});