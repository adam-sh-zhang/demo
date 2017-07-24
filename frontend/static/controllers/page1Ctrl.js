define(["app"], function(app) {
    return app.registerController("page1", function($scope) {
        $scope.content = "page1";
    });
});