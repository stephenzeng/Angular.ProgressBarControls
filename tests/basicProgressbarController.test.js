/**
 * Created by STEPHEN on 10/8/2014.
 */
describe('basicProgressbarController.test', function () {
    beforeEach(module('progressbarApp'));

    var scope, controller, timeout, log;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('basicProgressbarController', {
            $scope: scope, $timeout: timeout, $log: log
        });
    }));

    it('start method should be defined', function () {
        expect(scope.start).toBeDefined();
        expect(scope.pause).toBeDefined();
        expect(scope.reset).toBeDefined();
    })
})