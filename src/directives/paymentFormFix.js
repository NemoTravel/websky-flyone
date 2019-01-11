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

        // поскольку значения по умолчанию теперь пустые, нужно снимать
        // атрибут checked с инпута, сейчас input[checked=true] т.к в верстке payment-type-select
        // присутствует код
        // !vm.selectedPaymentType || vm.selectedPaymentType === 'plastic_card'
        // поскольку в контроллере мы устанавливаем vm.paymentForm = vm.paymentType = null
        // условие !vm.selectedPaymentType срабатывает и инпут выставляется как checked
        link: function (scope, el) {
            var elementPresentOnPageInterval = setInterval(function () {
                var input = el.find('input:checked');

                if (input.length) {
                    input.prop('checked', false);
                    clearInterval(elementPresentOnPageInterval);
                }
            }, 200);
        }
}
});

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