var app = angular.module('app');

app.directive('getPassengersContactInfo', function () {
    return {
        scope: false,
        bindScopeToController: true,
        controllerAs: 'getPassengersContactInfo',
        controller: 'getPassengersContactInfoController'
    }
});

app.controller('getPassengersContactInfoController', ['$scope', '$rootScope', getPassengersContactInfoController]);

function getPassengersContactInfoController($scope, $rootScope) {
    $scope.$watch(angular.bind(this, function () {
        if (
            $rootScope.$$childHead &&
            $rootScope.$$childHead.vm &&
            $rootScope.$$childHead.vm.customerForm &&
            $rootScope.$$childHead.vm.customerForm.email
        ) {
            return $rootScope.$$childHead.vm.customerForm
        }
    }), function () {

        $scope.vm.customer = {};

        if ($rootScope.$$childHead.vm.customerForm) {
            $scope.vm.customer.phone = $rootScope.$$childHead.vm.customerForm.phone.$modelValue;
            $scope.vm.customer.email = $rootScope.$$childHead.vm.customerForm.email.$modelValue;
            $scope.vm.customer.lastName = $rootScope.$$childHead.vm.customerForm.lastName.$modelValue;
            $scope.vm.customer.firstName = $rootScope.$$childHead.vm.customerForm.firstName.$modelValue;
        }


    }, true);
}