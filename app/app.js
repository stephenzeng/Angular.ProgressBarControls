/**
 * Created by stephenze on 7/10/2014.
 */
'use strict'
var app = angular.module('progressbarApp',[]);

app.run(function ($rootScope) {
    $rootScope.appTitle = 'AngularJS Progressbar Controls v0.1';
})

angular.module('progressbarApp').directive('basicProgressbar', function () {
    return{
        restrict:'A',
        //scope:{},
        templateUrl: 'views/basicProgressbar.tmp.html'
        //controller: angular.module('progressbarApp').controller('basicProgressbarController')
    }
});