require.config({
    baseUrl: "/",
    paths: {
        "angular" : "node_modules/angular/angular",
        "bootstrap" : "static/bootstrap",
        "angular-ui-router" : "node_modules/angular-ui-router/release/angular-ui-router",
        "config" : "static/config",
        "app" : "static/app"
    },
    deps: ["bootstrap"]
});