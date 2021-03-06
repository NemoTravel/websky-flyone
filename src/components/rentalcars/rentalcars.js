var app = angular.module('app');

app.filter('trustUrl', ['$sce', function ($sce) {
    return function (url) {
        return $sce.trustAsResourceUrl(url);
    }
}]);

app.component('rentalcarsIframe', {
    controllerAs: 'vm',
    bindings: {
        orderInfo: '<'
    },
    templateUrl: 'components/rentalcars/rentalcars.html',
    controller: 'rentalcarsIframeCtrl'
});

app.controller('rentalcarsIframeCtrl', ['$scope', '$sce', 'backend', '$route', 'ROUTES', rentalcarsIframeCtrl]);

function rentalcarsIframeCtrl($scope, $sce, backend, $route, ROUTES) {
    var vm = this;

    vm.baseRentalCarsUrl = 'https://secure.rentalcars.com/WidgetSearch.do?';
    vm.DEFAULT_PARAMS = {
        affiliateCode: 'flyone',
        pickupIATACode: 'KIV',
        prefcurrency: 'EUR',
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
        preflang: 'ru',
        results: 3
    };
    vm.SHOW_ON_PAGES = [ROUTES.CONFIRM_ORDER, ROUTES.SEARCH_ORDER, ROUTES.SEARCH_ORDER_WITH_PARAMS];
    vm.showRentalCarsIframe = false;
    vm.destionation = null;

    vm.$onInit = function () {

        // don't show iframe in cancelled orders
        if (vm.orderInfo.header.status !== 'paid') {
            return;
        }

        // show only at specific pages (see vm.SHOW_ON_PAGES)
        if (!_.contains(vm.SHOW_ON_PAGES, $route.current.$$route.originalPath)) {
            return;
        }


        var newParams = _.clone(vm.DEFAULT_PARAMS),
            firstFlight = getFlightData(),
            firstFlightDate = firstFlight.arrivaldate.split('.'),
            destCity = firstFlight.destinationcity,
            destPort = firstFlight.destinationport;

        backend.ready.then(function () {

            newParams.pickupIATACode = destCity;
            newParams.pickupDate = firstFlightDate[0];
            newParams.pickupMonth = firstFlightDate[1];
            newParams.pickupYear = firstFlightDate[2];
            newParams.preflang = backend.sessionParams.lang;

            if (destPort) {
                newParams.pickupIATACode = destPort;
            }

            constructUrl(newParams);

            vm.showRentalCarsIframe = true;
        });
    };

    function getFlightData() {
        return vm.orderInfo.plainFlights[0];
    }

    function constructUrl(params) {
        var newUrl = 'https://secure.rentalcars.com/WidgetSearch.do?';

        Object.keys(params).map(function (key) {
            newUrl += key + '=' + params[key] + '&';
        });

        vm.baseRentalCarsUrl = newUrl;
    }
}
