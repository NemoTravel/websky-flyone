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
    var vm = $scope;

    $scope.$watch(angular.bind(this, function () {
        if (
            $rootScope.$$childHead &&
            $rootScope.$$childHead.vm &&
            $rootScope.$$childHead.vm.customerForm &&
            $rootScope.$$childHead.vm.customerForm.email
        ){
            return $rootScope.$$childHead.vm.customerForm.email.$modelValue
        }
    }), function (newCustomerEmail) {
        if (newCustomerEmail) {
            $scope.vm.customerEmail = newCustomerEmail;
        }
    });
}