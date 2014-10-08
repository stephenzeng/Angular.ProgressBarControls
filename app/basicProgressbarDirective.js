/**
 * Created by stephenze on 8/10/2014.
 */
'use strict'
angular.module('progressbarApp').directive('basicProgressbar', function () {
    return{
        restrict:'A',
        templateUrl: 'views/basicProgressbar.tmp.html',
        controller:'basicProgressbarController'
    }
});