var app = angular.module('app');

app.directive('paymentFormFix', function () {
    return {
        scope: {
            paymentType: '=',
            paymentForm: '=',
            priceVariant: '='
        },
        bindToController: true,
        controller: 'paymentFormFixController',
        controllerAs: 'vm',
    }
});

app.controller('paymentFormFixController', ['$scope', paymentFormFixController]);

function paymentFormFixController($scope) {
    var vm = this;
    console.log($scope, vm);

    $scope.$watch(angular.bind(this, function () {
        return vm.paymentType;
    }), function (newPaymentType) {
        if (newPaymentType === 'plastic_card') {
            vm.paymentForm = 'plastic_card';
        }
    });
}