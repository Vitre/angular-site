function Site(config, scope) {

    this.config = config;

    this.scope = scope;

    this.getLocale = function () {
        return this.config.locale;
    };

    this.getConfig = function() {
        return this.config;
    };

    this.getThemeRoot = function() {
        return this.config.theme.root;
    };

    this.getApiBaseUri = function() {
        return this.config.api.root + '/' + this.config.api.version;
    }

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
