/**
 * Created by STEPHEN on 10/7/2014.
 */

angular.module('progressbarApp').controller('basicProgressbarController', function($scope, $timeout, $log){

    $scope.started = false;
    $scope.progressPercentage = 0;

    $scope.start = function(){
        $log.info('start');
        $scope.started = true;

        increaseProgress();
    }

    var increaseProgress = function(){
        if (!$scope.started) return;
        if ($scope.progressPercentage >= 100) return;

        $scope.progressPercentage ++;
        $log.info($scope.progressPercentage);
        $timeout(increaseProgress, 1000);
    }

    $scope.reset = function(){
        $scope.progressPercentage = 0;
        $scope.started = false;
    }

    $scope.pause = function(){
        $scope.started = false;
    }

});