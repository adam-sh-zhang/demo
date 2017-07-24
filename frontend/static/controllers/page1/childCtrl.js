define(["app"], function(app) {
    return app.registerController("page1.child", function($scope) {
        $scope.content = "page1.child";
    });
});