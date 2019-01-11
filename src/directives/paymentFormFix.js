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
            controllerAs: 'vm'
        }
    }
);

app.controller('paymentFormFixController', ['$scope', paymentFormFixController]);

function paymentFormFixController($scope) {
    var vm = this;

    $scope.$watch(angular.bind(this, function () {
        return vm.paymentType;
    }), function (newPaymentType) {

        // удалить дефолтное значение из выбранного способа оплаты.
        if (_.isEqual(vm.paymentForm, {code: 'QW', name: 'Qiwi'})) {
            vm.paymentForm = vm.paymentType = null;
        }

        // #42415
        // Если где-то изменяется значение vm.paymentType на plastic_card
        // Обновить vm.paymentForm
        if (newPaymentType === 'plastic_card') {
            vm.paymentForm = 'plastic_card';
        }
    });
}