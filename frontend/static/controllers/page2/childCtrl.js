define(["app"], function(app) {
    return app.registerController("page2.child", function($scope) {
        $scope.content = "page2.child";
    });
});