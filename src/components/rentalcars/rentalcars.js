var app = angular.module('app');
app.filter('trustUrl', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    }
}]);

app.component('rentalcarsIframe', {
    controllerAs: 'vm',
    bindings: {
        searchParams: '<',
        lang: '<'
    },
    templateUrl: 'components/rentalcars/rentalcars.html',
    controller: 'rentalcarsIframeCtrl'
});

app.controller('rentalcarsIframeCtrl', ['$scope', '$sce', 'backend', rentalcarsIframeCtrl]);

function rentalcarsIframeCtrl($scope, $sce, backend) {
    var vm = this;

    vm.baseRentalCarsUrl = 'https://secure.rentalcars.com/WidgetSearch.do?';
    vm.defaultHeight = 150;
    vm.DEFAULT_PARAMS = {
        affiliateCode: 'flyone',
        pickupIATACode: 'KIV',
        pickupHour: 12,
        pickUpMinute: 30,
        returnHour: 10,
        returnMinute: 30,
        pickupDate: 5,
        pickupMonth: 9,
        pickupYear: 2018,
        returnDate: 9,
        returnMonth: 9,
        returnYear: 2018,
        prefLang: 'ru',
        results: 3
    };
    vm.showRentalCarsIframe = false;
    vm.destionation = null;

    $scope.$watchCollection(angular.bind(this, function () {
        return vm.searchParams
    }), function (newSearchParams) {
        vm.destionation = newSearchParams.segments[0].destination;
        vm.date = newSearchParams.segments[0].date.split('.');

        var newParams = _.clone(vm.DEFAULT_PARAMS);


        if (vm.date && vm.destionation) {
            newParams.pickupIATACode = vm.destionation.codeEn;


            newParams.pickupDate = vm.date[0];
            newParams.pickupMonth = vm.date[1];
            newParams.pickupYear = vm.date[2];

            vm.showRentalCarsIframe = true;
        }


        constructUrl(newParams);
    });

    vm.$onInit = function () {
        constructUrl(vm.DEFAULT_PARAMS);
        console.log($scope);
    };

    function constructUrl(params) {
        var newUrl = 'https://secure.rentalcars.com/WidgetSearch.do?';
        Object.keys(params).map(function (key) {
            newUrl += key + '=' + params[key] + '&';
        });

        vm.baseRentalCarsUrl = newUrl;
    }
}
