function Site(config, scope) {

    this.config = config;

    this.scope = scope;

    this.getLocale = function () {
        return this.config.locale;
    };

}

app.provider('site', function () {

    var config = {};

    this.setConfig = function (conf) {
        config = conf;
    };

    this.$get = ['$rootScope', function ($rootScope) {
        return new Site(config, $rootScope);
    }];

});
