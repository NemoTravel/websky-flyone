!function(){function r(e,t,n){function a(c,i){if(!t[c]){if(!e[c]){var u="function"==typeof require&&require;if(!i&&u)return u(c,!0);if(o)return o(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[c]={exports:{}};e[c][0].call(l.exports,function(r){var t=e[c][1][r];return a(t||r)},l,l.exports,r,e,t,n)}return t[c].exports}for(var o="function"==typeof require&&require,c=0;c<n.length;c++)a(n[c]);return a}return r}()({1:[function(r,e,t){"use strict";function n(r,e,t,n,a){function o(){return i.orderInfo.plainFlights[0]}function c(r){var e="https://secure.rentalcars.com/WidgetSearch.do?";Object.keys(r).map(function(t){e+=t+"="+r[t]+"&"}),i.baseRentalCarsUrl=e}var i=this;i.baseRentalCarsUrl="https://secure.rentalcars.com/WidgetSearch.do?",i.DEFAULT_PARAMS={affiliateCode:"flyone",pickupIATACode:"KIV",prefcurrency:"EUR",pickupHour:12,pickUpMinute:30,returnHour:10,returnMinute:30,pickupDate:5,pickupMonth:9,pickupYear:2018,returnDate:9,returnMonth:9,returnYear:2018,preflang:"ru",results:3},i.SHOW_ON_PAGES=[a.CONFIRM_ORDER,a.SEARCH_ORDER,a.SEARCH_ORDER_WITH_PARAMS],i.showRentalCarsIframe=!1,i.destionation=null,i.$onInit=function(){if("paid"===i.orderInfo.header.status&&_.contains(i.SHOW_ON_PAGES,n.current.$$route.originalPath)){var r=_.clone(i.DEFAULT_PARAMS),e=o(),a=e.arrivaldate.split("."),u=e.destinationcity,s=e.destinationport;t.ready.then(function(){r.pickupIATACode=u,r.pickupDate=a[0],r.pickupMonth=a[1],r.pickupYear=a[2],r.preflang=t.sessionParams.lang,s&&(r.pickupIATACode=s),c(r),i.showRentalCarsIframe=!0})}}}var a=angular.module("app");a.filter("trustUrl",["$sce",function(r){return function(e){return r.trustAsResourceUrl(e)}}]),a.component("rentalcarsIframe",{controllerAs:"vm",bindings:{orderInfo:"<"},templateUrl:"components/rentalcars/rentalcars.html",controller:"rentalcarsIframeCtrl"}),a.controller("rentalcarsIframeCtrl",["$scope","$sce","backend","$route","ROUTES",n])},{}],2:[function(r,e,t){"use strict";r("./components/rentalcars/rentalcars")},{"./components/rentalcars/rentalcars":1}]},{},[2]);
//# sourceMappingURL=controllers-flyone.js.map
