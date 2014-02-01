define(['angular', 'angularRoute'], function (angular) {

    'use strict';

    return angular.module('<%= _.slugify(appName) %>', ['ngRoute']);
});