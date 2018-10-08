!function(e){try{e=angular.module("app")}catch(a){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/app-header/app-header.html",'<app-loader ng-if="vm.loading"></app-loader><header class="header header_small"><div class="wrap"><div class="header__i"><div class="logo"><a href="{{ \'web.site.mainPageUrl\' | aliasStatic }}"><span class="img"></span></a></div><a href="" ng-click="activeNavMobile = !activeNavMobile" class="mainNavBtn mainNavBtn_js mobileShow" ng-class="{ active: activeNavMobile }"><span></span> <span></span> <span></span></a></div><div class="headerAlias" ng-bind-html="vm.headerAliasHtml"></div><div class="headerRight"><div class="headerRight__col"><nav class="userNav"><div class="userNav__i"><ul><li ng-if="vm.authoriseCustomer"><ui-select ng-model="vm.privateNav" theme="selectize" name="privateNav" search-enabled="false" ng-change="vm.changePrivateNav()" class="ui-select-header ui-select-header-private-nav" required=""><ui-select-match placeholder="{{ vm.authoriseCustomer.firstName }}&nbsp;{{ vm.authoriseCustomer.lastName }}">{{ vm.authoriseCustomer.firstName }}&nbsp;{{ vm.authoriseCustomer.lastName }}</ui-select-match><ui-select-choices repeat="item.code as item in vm.availablePrivateNavItems"><div>{{ item.title }}</div></ui-select-choices></ui-select></li><li ng-if="!vm.authoriseCustomer && (\'site.bookingEnabled\' | param)"><a class="popup_js" href="" fancybox="popupLogin">{{ \'web.buttons.login\' | aliasStatic}}</a></li><li ng-if="vm.availableLanguages.length > 1"><ui-select ng-model="vm.currentLanguage" theme="selectize" name="language" search-enabled="false" ng-change="vm.changeCurrencyLanguage()" class="ui-select-header ui-select-header-language" required=""><ui-select-match placeholder="{{ $select.selected.title }}">{{ $select.selected.title }}</ui-select-match><ui-select-choices repeat="lang.code as lang in vm.availableLanguages"><div>{{ lang.title }}</div></ui-select-choices></ui-select></li><li ng-if="vm.availableCurrencies.length > 1"><ui-select ng-model="vm.currentCurrency" theme="selectize" search-enabled="false" ng-change="vm.changeCurrencyLanguage()" name="currency" class="ui-select-header ui-select-header-currency" required=""><ui-select-match placeholder="{{$select.selected.name}}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="currency.code as currency in vm.availableCurrencies"><span class="currency_sign currency_sign_{{currency.code}}" ng-bind-html="vm.getUnicodeCurrencySign(currency.code)"></span><div ng-bind-html="currency.name"></div></ui-select-choices></ui-select></li></ul></div></nav></div><div ng-if="!vm.isPrivateScreen" class="headerRight__col"><cart-widget></cart-widget></div></div></div><div class="mainNavMobile" ng-class="{ active: activeNavMobile }"><div class="mainNavMobile__i"><div ng-if="!vm.authoriseCustomer" class="item"><a href="" fancybox="popupLogin">{{ \'web.buttons.login\' | aliasStatic}}</a></div><wrap ng-if="vm.authoriseCustomer && !vm.isPrivateScreen"><div class="item"><a href="#{{$root.ROUTES.PRIVATE_ORDERS}}">{{ \'web.steps.privateOrders\' | aliasStatic}}</a></div><div class="item"><a href="#{{$root.ROUTES.PRIVATE_PROFILE}}">{{ \'web.steps.privateProfile\' | aliasStatic}} ({{ vm.authoriseCustomer.firstName }}&nbsp;{{ vm.authoriseCustomer.lastName }})</a></div><div class="item"><a href="./admin">{{ \'web.buttons.gotoAdminPanel\' | aliasStatic }}</a></div></wrap><div ng-if="vm.authoriseCustomer" class="item"><a href="" ng-click="vm.logoutHandler()">{{ \'web.buttons.logout\' | aliasStatic}}</a></div><div class="item" ng-if="vm.availableLanguages.length > 1"><div class="selectWrap"><ui-select ng-model="vm.currentLanguage" theme="selectize" name="language" search-enabled="false" ng-change="vm.changeCurrencyLanguage()" class="ui-select-header ui-select-header-language ui-select-header-mobile" required=""><ui-select-match placeholder="{{ $select.selected.title }}">{{ $select.selected.title }}</ui-select-match><ui-select-choices repeat="lang.code as lang in vm.availableLanguages"><div>{{ lang.title }}</div></ui-select-choices></ui-select></div></div><div class="item" ng-if="vm.availableCurrencies.length > 1"><div class="selectWrap"><ui-select ng-model="vm.currentCurrency" theme="selectize" search-enabled="false" ng-change="vm.changeCurrencyLanguage()" name="currency" class="ui-select-header ui-select-header-currency ui-select-header-mobile" required=""><ui-select-match placeholder="{{$select.selected.name}}">{{$select.selected.name}}</ui-select-match><ui-select-choices repeat="currency.code as currency in vm.availableCurrencies"><span class="currency_sign currency_sign_{{currency.code}}" ng-bind-html="vm.getUnicodeCurrencySign(currency.code)"></span><div ng-bind-html="currency.name"></div></ui-select-choices></ui-select></div></div></div></div></header><div ng-if="vm.errorMessage" class="header-error-cont wrap"><div class="infoMessage infoMessage_error"><div class="infoMessage__i"><p>{{ vm.errorMessage | aliasDynamic }}</p></div></div></div><cookie-warning ng-if="( \'site.showCookieWarning\' | param )"></cookie-warning><wrap ng-if="!vm.loading"><popup-login></popup-login><popup-registration></popup-registration><popup-reset-password></popup-reset-password><popup-resend-activation-mail></popup-resend-activation-mail><popup-compare ng-if="( \'search.useMonoBrandCartesian\' | param )"></popup-compare><popup-session-inactive></popup-session-inactive><popup-captcha-required></popup-captcha-required><popup-order-email-required></popup-order-email-required><popup-confirm-passenger-names></popup-confirm-passenger-names><popup-cancel-session></popup-cancel-session><popup-change-currency-error></popup-change-currency-error></wrap>')}])}(),function(e){try{e=angular.module("app")}catch(a){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/order/order.html",'<app-loader ng-if="vm.loading || vm.popupChoosePayMethodPending"></app-loader><div ng-if="vm.errorMessage" class="message_error">{{ vm.errorMessage | aliasDynamic }}</div><div ng-if="!vm.loading && vm.orderInfo && !vm.errorMessage && !vm.popupChoosePayMethodPending" class="invoice"><div class="invoice__i"><div ng-if="vm.orderInfo.header.regnum" class="invoiceInfo"><div class="invoiceInfo__i"><span class="orderNum">{{ \'web.orderInfo.orderNum\' | aliasStatic}} {{ vm.orderInfo.header.regnum }}</span> <span class="status" ng-class="{ notPayed: vm.orderInfo.header.status == \'cancelled\' }">{{ \'web.orderInfo.label.orderStatus.\' | aliasWithPrefix:vm.orderInfo.header.status }}<wrap ng-if="vm.orderInfo.paymentform">, {{ \'web.orderinfo.paymenttype.\' | aliasWithPrefix:vm.orderInfo.paymentform }}</wrap>{{ \'. \' }}<wrap ng-if="vm.orderInfo.header.status == \'booked\' || vm.orderInfo.header.status == \'being_paid\' || vm.orderInfo.header.status == \'payment_received\'"><wrap ng-if="vm.orderInfo.header.paymentNotAllow">{{ \'web.orderInfo.label.timeoutPaymentNotAllow\' | aliasStatic}} {{ vm.orderInfo.header.validThru }}</wrap><wrap ng-if="!vm.orderInfo.header.paymentNotAllow">{{ \'web.orderInfo.label.timeout\' | aliasStatic}} {{ vm.orderInfo.header.validThru }}</wrap></wrap><wrap ng-if="(!vm.orderInfo.hasFailedServices || vm.ignoreFailedServices) && vm.orderInfo.paycode"><br>{{ \'web.orderInfo.label.paycode\' | aliasStatic}} <b>{{ vm.orderInfo.paycode }}</b></wrap></span></div><div ng-if="vm.orderInfo.header.status == \'paid\'" class="btn_receipt_cont"><a ng-href="./receipt?pnr={{ vm.orderInfo.header.regnum }}&lastName={{ vm.orderInfo.header.lastName }}&tabId={{ vm.tabId }}" target="_blank" class="show_receipt">{{ \'web.orderInfo.actions.receipt\' | aliasStatic}}</a> <a href="" fancybox="popupSendReceipt" class="send_receipt"></a></div></div><div class="invoiceDrops"><div ng-if="vm.orderInfo.flights.length" class="item dropWrapper" ng-class="{ active: vm.dropState[0] }"><div class="item__i"><div class="title"><a href="" ng-click="vm.dropState[0] = !vm.dropState[0]" class="openDrop"><span class="circle"><i class="icon_triangle"></i></span><route-desc segments="vm.orderInfo.flights" flights="vm.orderInfo.plainFlights"></route-desc></a></div><div class="drop" ng-class="{ show_js: vm.dropState[0] }"><div class="drop__i"><div class="choosenFlight"><div class="choosenFlight__i"><div class="chooseResult"><div class="chooseResult__i chooseResult__i__order"><div ng-repeat="(segNum, segment) in vm.orderInfo.flights" class="flight"><div class="route_item_container" ng-repeat="(flightNum, flight) in segment.flights"><div class="route_item"><div class="route__i route_container"><div class="route_table"><div class="dep"><div class="dep__date" ng-class="{ nextDay: flight.departuredayshift, attention: flight.departuredayshift}">{{ flight.departuredate | formatDate: \'D MMM, dd\' }}</div><div class="dep__time">{{ flight.departuretime }}</div><geo-marker prefix="dep__point" key="booking" city="flight.origincity" cityname="flight.origincityName" port="flight.originport" portname="flight.originportName"></geo-marker></div><div class="info"><i class="icon_plane"></i><div class="info__number">{{ flight.company.code_en }}-{{ flight.racenumber }}</div><div class="info__timeEnRoute">{{ flight.flighttime | timeAsWords }}</div></div><div class="arr"><div class="arr__date" ng-class="{ nextDay: flight.arrivaldayshift, attention: flight.arrivaldayshift}">{{ flight.arrivaldate | formatDate: \'D MMM, dd\' }}</div><div class="arr__time">{{ flight.arrivaltime }}</div><geo-marker prefix="arr__point" key="booking" city="flight.destinationcity" cityname="flight.destinationcityName" port="flight.destinationport" portname="flight.destinationportName"></geo-marker></div></div></div><div class="route__i additional"><span class="additional__company">{{ \'web.choosenFlight.company\' | aliasStatic}} {{ flight.company.name }}</span> <span class="additional__company" ng-if="flight.operatingCompany">{{ \'web.search.results.operatingCompany\' | aliasStatic}} {{ flight.operatingCompany.name }}</span> <span class="additional__plane">{{ flight.airplaneName }}</span></div></div><div ng-if="segment.connections[flightNum]" ng-init="connection=segment.connections[flightNum]" class="transfer"><span class="transfer__text"><strong>{{ \'web.choosenFlight.connection\' | aliasStatic}} {{ connection.time | timeAsWords }}</strong></span> <span ng-if="connection.previousAirport && connection.nextAirport && connection.previousAirport != connection.nextAirport" class="terminalChange">{{ \'web.choosenFlight.airportChange\' | aliasStatic}} (<span class="terminalName">{{ connection.previousAirport }}</span> <span class="terminalName">{{ connection.nextAirport }}</span>)</span> <span ng-if="connection.previousAirport == connection.nextAirport && connection.previousTerminal && connection.nextTerminal && connection.previousTerminal != connection.nextTerminal" class="terminalChange">{{ \'web.choosenFlight.terminalChange\' | aliasStatic}} (<span class="terminalName">{{ connection.previousTerminal }}</span> <span class="terminalName">{{ connection.nextTerminal }}</span>)</span></div><div ng-repeat="landing in flight.landings" class="landing"><span class="landing__text"><strong>{{ \'web.searchScheduleResult.landing\' | aliasStatic}}</strong></span><p class="landing__airport">{{ landing.landingCityName }} ({{ landing.landingTime | timeAsWords }})</p></div></div><div ng-if="segment.flights.length > 1" class="timeEnRoute">{{ \'web.choosenFlight.flighttime\' | aliasStatic}} {{ segment.flightTime | timeAsWords }}</div><brand-props-info ng-if="segment.flights[0].brand && ( \'search.useMonoBrandCartesian\' | param )" brand-name="segment.flights[0].brandName" brand-available-props="segment.flights[0].brandAvailableProps" brand-paid-props="segment.flights[0].brandPaidProps" brand-unavailable-props="segment.flights[0].brandUnavailableProps"><brand-props-info></brand-props-info></brand-props-info></div></div></div></div></div></div></div></div></div><div class="item dropWrapper" ng-class="{ active: vm.dropState[1] }"><div class="item__i"><div class="title"><a href="" ng-click="vm.dropState[1] = !vm.dropState[1]" class="openDrop"><span class="circle"><i class="icon_triangle"></i></span> {{ \'web.orderInfo.passengers\' | aliasStatic}} <span ng-repeat="(num, passenger) in vm.orderInfo.passengers"><span ng-if="num">,</span> {{ passenger.lastName }} {{ passenger.firstName }}</span></a></div><div class="drop" ng-class="{ show_js: vm.dropState[1] }"><div class="drop__i"><div class="passengerInvoiceInfo"><div class="passengerInvoiceInfo__i"><div class="row"><table><tbody ng-repeat="(num, passenger) in vm.orderInfo.passengers" ng-class="{ withoutSeat: !passenger.hasSeats }"><tr ng-if="passenger.lastName && passenger.firstName"><th colspan="3"><i ng-if="!passenger.hasSeats" class="icon_child-discount"></i> <strong>{{ passenger.lastName }} {{ passenger.firstName }}</strong></th></tr><tr><td><p ng-if="passenger.dateOfBirth">{{ \'web.orderInfo.passenger.dateOfBirth\' | aliasStatic}} {{ passenger.dateOfBirth }}</p><p ng-if="passenger.gender">{{ \'web.orderInfo.passenger.gender\' | aliasStatic}} {{ \'web.orderInfo.label.gender.\' | aliasWithPrefix:passenger.gender }}</p><p ng-if="passenger.nationality">{{ \'web.orderInfo.passenger.nationality\' | aliasStatic}} {{ passenger.nationality }}</p><p ng-if="passenger.phone">{{ \'web.orderInfo.passenger.phone\' | aliasStatic}} {{ passenger.phone }}</p><p ng-if="passenger.eMail">{{ \'web.orderInfo.passenger.eMail\' | aliasStatic}} {{ passenger.eMail }}</p></td><td class="documentCode--{{ passenger.documentCode }}"><p ng-if="passenger.documentType">{{ \'web.orderInfo.passenger.documentType\' | aliasStatic}} {{ passenger.documentType }}</p><p ng-if="passenger.documentNumber">{{ \'web.orderInfo.passenger.documentNumber\' | aliasStatic}} {{ passenger.documentNumber }}</p><p class="documentDate" ng-if="passenger.documentDate">{{ \'web.orderInfo.passenger.documentDate\' | aliasStatic}} {{ passenger.documentDate }}</p></td><td><p ng-if="passenger.tickets"><strong>{{ \'web.orderInfo.passenger.ticket\' | aliasStatic}} <span ng-repeat="(tickNum, ticket) in passenger.tickets"><span ng-if="tickNum">,</span> {{ ticket }}</span></strong></p><p ng-if="passenger.bonusCard">{{ \'web.orderInfo.passenger.bonusCard\' | aliasStatic}} {{ passenger.bonusCard }}</p></td></tr></tbody></table></div></div></div></div></div></div></div><div class="item dropWrapper" ng-class="{ active: vm.dropState[2] }"><div class="item__i"><div class="title"><a href="" ng-click="vm.dropState[2] = !vm.dropState[2]" class="openDrop"><span class="circle"><i class="icon_triangle"></i></span> {{ \'web.orderInfo.label.customer\' | aliasStatic}} <span>{{ vm.orderInfo.customer.lastName }} {{ vm.orderInfo.customer.firstName }}</span></a></div><div class="drop" ng-class="{ show_js: vm.dropState[2] }"><div class="drop__i"><div class="passengerInvoiceInfo"><div class="passengerInvoiceInfo__i"><div class="row"><table><tbody><tr><td ng-if="vm.orderInfo.customer.phone"><p>{{ \'web.orderInfo.customer.phone\' | aliasStatic}} {{ vm.orderInfo.customer.phone }}</p></td><td ng-if="vm.orderInfo.customer.eMail"><p>{{ \'web.orderInfo.customer.eMail\' | aliasStatic}} {{ vm.orderInfo.customer.eMail }}</p></td></tr></tbody></table></div></div></div></div></div></div></div><div ng-if="vm.orderInfo.history.length" class="item dropWrapper" ng-class="{ active: vm.dropState[3] }"><div class="item__i"><div class="title"><a href="" ng-click="vm.dropState[3] = !vm.dropState[3]" class="openDrop"><span class="circle"><i class="icon_triangle"></i></span> {{ \'web.orderInfo.history\' | aliasStatic}}</a></div><div class="drop" ng-class="{ show_js: vm.dropState[3] }"><div class="drop__i"><div class="invoiceHistory"><div class="invoiceHistory__i"><table><tbody><tr ng-repeat="rec in vm.orderInfo.history"><td><strong>{{ rec.date }}</strong></td><td><p>{{ rec.type }}</p><p ng-if="rec.comment">{{ rec.comment }}</p></td><td class="col_amount"><p ng-if="rec.amount" ng-bind-html="{ value: rec.amount, currency: rec.currency } | price"></p></td></tr></tbody></table></div></div></div></div></div></div></div><div class="row"><div class="col"><div class="invoiceServicesSelected"><div class="invoiceServicesSelected__i"><h2 class="title">{{ \'web.orderInfo.extraServices\' | aliasStatic}}</h2><grouped-services-list order="vm.orderInfo" mode="all"></grouped-services-list></div></div><div ng-if="vm.orderInfo.addingExtraServicesAllowed" class="otherServices"><div class="otherServices__i"><h2 class="title">{{ \'web.orderInfo.addExtraServices\' | aliasStatic}}</h2><wrap ng-bind-html="\'web.orderInfo.addExtraServices.htmlItems\' | aliasStatic"></wrap><div class="btnRow"><a href="#{{$root.ROUTES.ADD_SERVICES}}" class="btn btn_select">{{ \'web.buttons.addServices\' | aliasStatic}}</a></div></div></div></div><a href="" name="invoiceHeader"></a><div class="col"><div class="invoiceTotal"><div class="invoiceTotal__i"><order-prices order="vm.orderInfo" mode="pricesIssued"></order-prices><order-ffp-prices summ="vm.orderInfo.ffpSumm" bonus="vm.ffpBonus"></order-ffp-prices><order-prices order="vm.orderInfo" mode="pricesNotIssued"></order-prices></div></div></div></div><div ng-if="(vm.orderInfo.price != vm.orderInfo.amountToPay || vm.orderInfo.currencyToPay != vm.orderInfo.currency) && vm.showPaymentFrame" class="amountToPayWarning"><span ng-bind-html="\'web.messages.amountToPayWarning\' | aliasStatic"></span> <span ng-bind-html="{ value: vm.orderInfo.amountToPay, currency: vm.orderInfo.currencyToPay } | price"></span></div><payment-frame ng-if="vm.showPaymentFrame" url="vm.orderInfo.paymentRedirectTo"></payment-frame><div ng-if="!vm.showPaymentFrame" class="btn-row"><ul><li ng-if="vm.orderInfo.possiblePaymentForms"><a href="" class="btn btn-change-pay-method" fancybox="popupChoosePayMethod">{{ \'web.buttons.changePayMethod\' | aliasStatic}}</a></li><li ng-if="\'site.bookingEnabled\' | param"><a href="" ng-click="vm.newBooking()" class="btn btn-new-booking">{{ \'web.buttons.newBooking\' | aliasStatic}}</a></li><li ng-if="!(\'site.bookingEnabled\' | param)"><a href="" ng-click="vm.clearSession()" class="btn btn-clear-session">{{ \'web.buttons.clearSession\' | aliasStatic}}</a></li><li ng-if="vm.orderInfo.cancellationAllowed"><a href="" fancybox="popupCancelOrder" class="btn">{{ \'web.orderInfo.actions.cancel\' | aliasStatic}}</a></li><li ng-if="vm.orderInfo.refundAllowed"><a href="" ng-click="vm.openRefund(vm.orderInfo.header.regnum, vm.orderInfo.header.lastName)" class="btn">{{ \'web.orderInfo.actions.refund\' | aliasStatic}}</a></li><li ng-if="vm.orderInfo.exchangeAllowed"><a href="" ng-click="vm.openExchange(vm.orderInfo.header.regnum, vm.orderInfo.header.lastName)" class="btn">{{ \'web.orderInfo.actions.exchange\' | aliasStatic}}</a></li><li ng-if="vm.orderInfo.retryRegisterAllowed"><a href="" ng-click="vm.retryPayment()" class="btn">{{ \'web.buttons.retryPay\' | aliasStatic}}</a></li><li ng-if="vm.orderInfo.paymentConfirmationAllowed"><a href="" fancybox="popupIssueTickets" class="btn">{{ \'web.buttons.issueTickets\' | aliasStatic}}</a></li><li ng-if="vm.orderInfo.bindAlowed"><a href="" ng-click="vm.bindOrder()" class="btn">{{ \'web.buttons.bindOrder\' | aliasStatic}}</a></li></ul></div><div ng-if="vm.showBindOrderSuccessMessage" class="infoMessage"><br><br><div class="infoMessage__i"><p ng-bind-html="\'web.messages.bindOrderSuccess\' | aliasStatic"></p></div></div><div ng-if="vm.showBindOrderFailMessage" class="infoMessage infoMessage_error"><br><br><div class="infoMessage__i"><p ng-bind-html="\'web.messages.bindOrderFail\' | aliasStatic"></p></div></div><div ng-if="vm.choosePayMethodFailMsg" class="infoMessage infoMessage_error"><br><br><div class="infoMessage__i"><p>{{vm.choosePayMethodFailMsg | aliasStatic}}</p></div></div></div><div class="wrap"><rentalcars-iframe order-info="vm.orderInfo"></rentalcars-iframe></div></div><wrap ng-if="!vm.loading && !vm.popupChoosePayMethodPending"><popup-cancel-order></popup-cancel-order><popup-remark></popup-remark><popup-issue-tickets mode="vm.orderInfo.paymentform"></popup-issue-tickets><popup-removed-services-warning-by-order order="vm.orderInfo"></popup-removed-services-warning-by-order><popup-send-receipt></popup-send-receipt><popup-aeroexpress-refund></popup-aeroexpress-refund><popup-choose-pay-method order-info="vm.orderInfo" ng-if="vm.orderInfo.possiblePaymentForms"></popup-choose-pay-method></wrap>')}])}(),function(e){try{e=angular.module("app")}catch(a){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/rentalcars/rentalcars.html",'<iframe ng-if="vm.showRentalCarsIframe" ng-src="{{ vm.baseRentalCarsUrl | trustUrl }}" width="100%" height="550px" frameborder="0" scrolling="no"></iframe>')}])}(),function(e){try{e=angular.module("app")}catch(a){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("components/search-mono-brand-cartesian-variants/search-mono-brand-cartesian-variants.html",'<div ng-repeat="(segNum, segment) in vm.searchParams.segments" class="chooseFlight"><div class="chooseFlight__i"><h2 class="flightWay"><span ng-show="vm.searchParams.segments.length > 1">{{segNum + 1}}.</span> {{ \'web.searchResult.segmentLabel\' | aliasStatic}}<span ng-if="vm.searchParams.segments.length > 1">{{ " " }}{{ \'web.searchResult.segmentLabel.\' | aliasWithPrefix:segNum }}</span>: <a href="" ng-click="vm.scrollToSegment(segNum)" name="segment_{{ segNum }}"><span><geo-marker-wrapper prefix="flightWay__point_origin" key="search-mono-brand-cartesian-variants" cityinfo="segment.origin"></geo-marker-wrapper></span> <span><geo-marker-wrapper prefix="flightWay__point_destination" key="search-mono-brand-cartesian-variants" cityinfo="segment.destination"></geo-marker-wrapper></span></a></h2><div ng-if="vm.searchResultPeriod.segmentsCalendar" class="chooseDate mobileHide"><div class="chooseDate__i"><a ng-click="vm.resetDate(segNum, false, -7)" class="control control_prev" ng-class="{ control_disabled:!vm.checkResetDate(segNum, false, -7) }" href=""></a><div class="tableWrap"><table><tbody><tr><td ng-repeat="cell in vm.searchResultPeriod.segmentsCalendar[segNum]" ng-class="{ active:(cell.date == segment.date) }" class="weekday_{{ cell.date | formatDate: \'E\'}}"><a href="" ng-click="vm.resetDate(segNum, cell.date)" ng-class="{ control_disabled:!vm.checkResetDate(segNum, cell.date), \'loading-start\': vm.loadingPeriodVariants }">{{ cell.date | formatDate: \'D MMM, dd\'}} <strong ng-if="cell.summ" ng-bind-html="{ value: cell.summ, currency: cell.currency } | price"></strong> <strong ng-if="!cell.summ">{{ \'web.searchMonoBrandCalendarNoFlight\' | aliasStatic }}</strong></a></td></tr></tbody></table></div><a ng-click="vm.resetDate(segNum, false, 7)" class="control control_next" ng-class="{ control_disabled:!vm.checkResetDate(segNum, false, 7) }" href=""></a></div></div><div ng-if="vm.searchResultPeriod.segmentsCalendar" class="chooseDate mobileShow"><div class="chooseDate__i"><div class="item"><a ng-click="vm.resetDate(segNum, false, -7)" ng-class="{ control_disabled:!vm.checkResetDate(segNum, false, -7) }" href="" class="prev"><span>{{ \'web.searchResult.minus3days\' | aliasStatic}}</span></a></div><div ng-repeat="cell in vm.searchResultPeriod.segmentsCalendar[segNum]" ng-class="{ active:(cell.date == segment.date) }" class="item weekday_{{ cell.date | formatDate: \'E\'}}"><a href="" ng-click="vm.resetDate(segNum, cell.date)" ng-class="{ control_disabled:!vm.checkResetDate(segNum, cell.date), \'loading-start\': vm.loadingPeriodVariants }">{{ cell.date | formatDate: \'D MMM, dd\'}} <strong ng-if="cell.summ" ng-bind-html="{ value: cell.summ, currency: cell.currency } | price"></strong> <strong ng-if="!cell.summ">{{ \'web.searchMonoBrandCalendarNoFlight\' | aliasStatic }}</strong></a></div><div class="item"><a ng-click="vm.resetDate(segNum, false, 7)" ng-class="{ control_disabled:!vm.checkResetDate(segNum, false, 7) }" href="" class="next"><span>{{ \'web.searchResult.plus3days\' | aliasStatic}}</span></a></div></div></div><div ng-if="vm.searchResult" class="flightTableWrap mobileHide"><div class="flightTable"><table><tr class="headrow"><td class="sortingCell firstCol"><variants-sort-switch selected="vm.searchResult.segmentSort[segNum]"></variants-sort-switch></td><td ng-repeat="(brandNum, brand) in vm.searchResult.brandsList" class="{{ brand.cssClass }}" ng-class="{ control_disabled: (segNum == 1 && !vm.searchResult.brandsCompatibleState[brandNum]) }"><div class="columnTitle"><div ng-if="brand.theBest" class="best">{{ \'web.searchResult.brandTheBest\' | aliasStatic}}</div><span class="name"><a href="" ng-click="vm.showCompare(brand.code)" class="popup_js">{{ brand.name }}</a></span><ul class="options"><li ng-repeat="prop in brand.importantProps"><span ng-if="prop.name" class="infoBoxWrap"><i class="icon_{{ prop.code }}"></i> <span class="infoBox"><span class="infoBox__i">{{ prop.name }}</span></span></span> <i ng-if="!prop.name" class="icon_{{ prop.code }}"></i></li></ul></div></td></tr><tr ng-repeat="(rowNum, row) in vm.searchResult.segmentRows[segNum]" class="contentRow"><td class="firstCol"><table class="timeTable"><tr><td><p class="time">{{ row.flightsInfo.departuretime }} <sup ng-if="row.flightsInfo.departuredayshift">{{ row.flightsInfo.departuredayshift | dayshift }} <span class="infoBox"><span ng-if="row.flightsInfo.departuredayshift == 1" class="infoBox__i">{{ \'web.searchResult.departureTomorrow\' | aliasStatic}}</span> <span ng-if="row.flightsInfo.departuredayshift > 1" class="infoBox__i">{{ \'web.searchResult.departuredayshift\' | aliasStatic}} {{row.flightsInfo.departuredayshift}} {{ \'web.searchResult.dayshiftDays\' | aliasStatic}}</span></span></sup> – {{ row.flightsInfo.arrivaltime }} <sup ng-if="row.flightsInfo.arrivaldayshift">{{ row.flightsInfo.arrivaldayshift | dayshift }} <span class="infoBox"><span ng-if="row.flightsInfo.arrivaldayshift == 1" class="infoBox__i">{{ \'web.searchResult.arrivalTomorrow\' | aliasStatic}}</span> <span ng-if="row.flightsInfo.arrivaldayshift > 1" class="infoBox__i">{{ \'web.searchResult.arrivaldayshift\' | aliasStatic}} {{row.flightsInfo.arrivaldayshift}} {{ \'web.searchResult.dayshiftDays\' | aliasStatic}}</span></span></sup></p></td><td><p class="duration">{{ row.flightsInfo.flighttime | timeAsWords }}</p></td></tr><tr><td colspan="2"><div class="chooseFlight__list__item__content__bottom__flightInfo"><span ng-repeat="flight in row.flights" class="number"><span ng-if="$index > 0">&nbsp;/</span> <span style="display: none;">{{flight}}</span> {{ flight.company.code || flight.company.code_en }}-{{ flight.racenumber }}</span>,&nbsp;<div class="chooseFlight__list__item__content__bottom__flightInfo_wrap"><span ng-repeat="flight in row.flights" class="chooseFlight__list__item__content__bottom__flightInfo_cityName"><span ng-if="row.flights.length > 1 && $index == 0">{{flight.origincityName}} <sub>{{flight.originportName}}</sub></span> <span ng-if="$index > 0">&nbsp;-&nbsp;</span> <span ng-if="row.flights.length > 1 && $index > 0">{{flight.destinationcityName}} <sub>{{flight.destinationportName}}</sub></span> <span ng-if="row.flights.length == 1">{{flight.origincityName}} <sub>{{flight.originportName}}</sub></span> <span ng-if="row.flights.length == 1">&nbsp;-&nbsp;</span> <span ng-if="row.flights.length == 1">{{flight.destinationcityName}} <sub>{{flight.destinationportName}}</sub></span></span></div></div></td></tr><tr><td><a href="" fancybox="popupFlightDetail" ng-click="vm.flightDetail = row" class="popup_js">{{ row.flightsInfo.connectionsMessage }}<span ng-if="row.flightsInfo.connections && row.flightsInfo.connections.length == 1">: {{ row.flightsInfo.connections[0].time | timeAsWords }}</span></a> <span ng-if="row.flightsInfo.landings.length" class="landing">{{ vm.suffixCount(row.flightsInfo.landings.length, ( \'web.searchResult.landings\' | aliasStatic)) }}</span></td><td></td></tr></table></td><td ng-repeat="(priceNum, priceItem) in row.prices track by $index" ng-class="{ active: priceItem.selected }"><wrap ng-if="priceItem"><a href="" ng-class="{ control_disabled: (segNum == 1 && !vm.searchResult.brandsCompatibleState[priceNum]) || priceItem.comparedDateTimeDisable }" ng-click="vm.selectVariant(segNum, rowNum, priceNum)"><wrap ng-bind-html="{ value: priceItem.price, currency: priceItem.currency } | price"></wrap></a> <span ng-if="segNum == 1 && vm.searchResult.brandsCompatibleState[priceNum] && priceItem.comparedDateTimeDisable" class="infoBoxWrap"><i class="icon_info"></i> <span class="infoBox"><span class="infoBox__i">{{ \'web.searchResult.flightTimesNotCompatible\' | aliasStatic}}</span></span></span> <span ng-if="segNum == 1 && !vm.searchResult.brandsCompatibleState[priceNum]" class="infoBoxWrap"><i class="icon_info"></i> <span class="infoBox"><span class="infoBox__i">{{ \'web.searchResult.brandsNotCompatible\' | aliasStatic}}</span></span></span></wrap><i ng-if="!priceItem" class="icon_minus"></i></td></tr></table></div><div class="tableInfo"><table><tr><td>{{ \'web.searchResult.localTimeMessage\' | aliasStatic}}</td><td>{{ \'web.searchResult.totalPriceMessage\' | aliasStatic}}</td></tr></table></div></div><div ng-if="vm.searchResult" class="flightTableWrap mobileShow"><div class="chooseFlight__list"><div ng-repeat="(rowNum, row) in vm.searchResult.segmentRows[segNum]" class="chooseFlight__list__item"><label class="chooseFlight__list__item__label"><input type="radio" name="flight_{{segNum}}" ng-model="vm.selectedFlightRow[segNum]" ng-change="vm.mobileFlightRowChangeHandler(segNum)" value="{{ rowNum }}"> <span></span><div class="chooseFlight__list__item__content"><div class="chooseFlight__list__item__content__info"><div class="chooseFlight__list__item__content__info__time"><span class="chooseFlight__list__item__content__info__time_wrap">{{ row.flightsInfo.departuretime }} <sup ng-if="row.flightsInfo.departuredayshift">{{ row.flightsInfo.departuredayshift | dayshift }} <span class="infoBox"><span ng-if="row.flightsInfo.departuredayshift == 1" class="infoBox__i">{{ \'web.searchResult.departureTomorrow\' | aliasStatic}}</span> <span ng-if="row.flightsInfo.departuredayshift > 1" class="infoBox__i">{{ \'web.searchResult.departuredayshift\' | aliasStatic}} {{row.flightsInfo.departuredayshift}} {{ \'web.searchResult.dayshiftDays\' | aliasStatic}}</span></span></sup> – {{ row.flightsInfo.arrivaltime }} <sup ng-if="row.flightsInfo.arrivaldayshift">{{ row.flightsInfo.arrivaldayshift | dayshift }} <span class="infoBox"><span ng-if="row.flightsInfo.arrivaldayshift == 1" class="infoBox__i">{{ \'web.searchResult.arrivalTomorrow\' | aliasStatic}}</span> <span ng-if="row.flightsInfo.arrivaldayshift > 1" class="infoBox__i">{{ \'web.searchResult.arrivaldayshift\' | aliasStatic}} {{row.flightsInfo.arrivaldayshift}} {{ \'web.searchResult.dayshiftDays\' | aliasStatic}}</span></span></sup></span></div><div class="chooseFlight__list__item__content__info__price"><span>{{ \'web.searchResult.minFlightPriceFrom\' | aliasStatic}}</span> <span ng-bind-html="{ value: row.minPrice, currency: row.minPriceCurrency } | price"></span></div></div><div class="chooseFlight__list__item__content__bottom"><div class="chooseFlight__list__item__content__bottom__link"><a href="" fancybox="popupFlightDetail" ng-click="vm.flightDetail = row" class="popup_js">{{ row.flightsInfo.connectionsMessage }}<span ng-if="row.flightsInfo.connections && row.flightsInfo.connections.length == 1">: {{ row.flightsInfo.connections[0].time | timeAsWords }}</span></a> <span ng-if="row.flightsInfo.landings.length" class="landing">{{ vm.suffixCount(row.flightsInfo.landings.length, ( \'web.searchResult.landings\' | aliasStatic)) }}</span></div><div class="chooseFlight__list__item__content__bottom__flightInfo"><span ng-repeat="flight in row.flights" class="number">{{ flight.company.code || flight.company.code_en }}-{{ flight.racenumber }}</span>, <span class="timeEnRoute">{{ \'web.choosenFlight.flighttime\' | aliasStatic}} {{ row.flightsInfo.flighttime | timeAsWords }}</span></div></div></div></label></div></div><div class="title"><div class="title__i"><p>{{ \'web.searchResult.brandSelect\' | aliasStatic}}</p><a href="" ng-click="vm.showCompare(brand.code)" class="overview popup_js" name="brandsOverview_{{segNum}}">{{ \'web.searchResult.brandCompare\' | aliasStatic}} <i class="icon_info"></i></a></div></div><div class="chooseFlight__table flightTable"><div class="chooseFlight__table__item" ng-if="vm.searchResult.segmentRows[segNum][vm.selectedFlightRow[segNum]].prices" ng-repeat="(priceNum, priceItem) in vm.searchResult.segmentRows[segNum][vm.selectedFlightRow[segNum]].prices track by $index"><div class="chooseFlight__table__item__columnTitle {{ vm.searchResult.brandsList[priceNum].cssClass }}"><div ng-if="vm.searchResult.brandsList[priceNum].theBest" class="best">{{ \'web.searchResult.brandTheBest\' | aliasStatic}}</div><span class="name"><a href="" ng-click="vm.showCompare(vm.searchResult.brandsList[priceNum].code)" class="popup_js">{{ vm.searchResult.brandsList[priceNum].name }}</a></span><ul class="options"><li ng-repeat="prop in vm.searchResult.brandsList[priceNum].importantProps"><span ng-if="prop.name" class="infoBoxWrap mobile"><i class="icon_{{ prop.code }}"></i> <span class="infoBox"><span class="infoBox__i">{{ prop.name }}</span></span></span> <i ng-if="!prop.name" class="icon_{{ prop.code }}"></i></li></ul></div><div class="chooseFlight__table__item__content" ng-class="{ active: priceItem.selected }"><a ng-if="priceItem" href="" ng-click="vm.selectVariant(segNum, vm.selectedFlightRow[segNum], priceNum)" ng-class="{ control_disabled: (segNum == 1 && !vm.searchResult.brandsCompatibleState[priceNum]) || priceItem.comparedDateTimeDisable }" class="chooseFlight__table__item__content__link"><span ng-bind-html="{ value: priceItem.price, currency: priceItem.currency } | price"></span></a> <i ng-if="!priceItem" class="icon_minus"></i></div></div></div></div></div></div><popup-flight-detail detail="vm.flightDetail"></popup-flight-detail>');
}])}(),function(e){try{e=angular.module("app")}catch(a){e=angular.module("app",[])}e.run(["$templateCache",function(e){e.put("screens/search/search.html",'<app-loader ng-if="vm.loadingVariants || (vm.loadingPeriodVariants && vm.searchResultError) || vm.loading"></app-loader><section class="out" ng-if="!vm.loading"><app-header></app-header><div class="searchSteps"><div class="wrap"><div class="searchSteps__i"><ol><li ng-if="vm.formOpened" class="active">{{ \'web.steps.search\' | aliasStatic}}</li><li ng-if="vm.formOpened">{{ \'web.steps.selectVariant\' | aliasStatic}}</li><li ng-if="!vm.formOpened" class="prev"><a href="{{ \'web.site.firstStepUrl\' | aliasStatic }}">{{ \'web.steps.search\' | aliasStatic}}</a></li><li ng-if="!vm.formOpened" class="active">{{ \'web.steps.selectVariant\' | aliasStatic}}</li><li>{{ vm.isSinglePassenger(vm.searchParams.passengers) ? ( \'web.steps.passenger\' | aliasStatic) : (\'web.steps.passengers\' | aliasStatic) }}</li><li>{{ \'web.steps.extraServices\' | aliasStatic}}</li><li>{{ \'web.steps.payment\' | aliasStatic}}</li><li>{{ \'web.steps.order\' | aliasStatic}}</li></ol></div></div></div><search-form submit="vm.searchSubmitHandler" change="vm.searchChangeHandler" update-params="vm.updateSearchParams" switch="vm.showSearchSwitch" opened="vm.formOpened" limits="vm.bookingLimits" nearest="vm.nearestDates" error="vm.searchResultError" lsp="vm.lastSearchParams" ffp="!!vm.ffpUser" ffp-login-error="vm.ffpLoginError"></search-form><div class="profileInfo" ng-if="vm.ffpUser"><div class="wrap"><div class="profileInfo__i"><div class="milesText">{{ \'web.search.bonus.cardNumberLabel\' | aliasStatic}} {{ vm.ffpUser.cardNumber }}, {{ \'web.search.bonus.accountLabel\' | aliasStatic}} <strong ng-bind-html="{ value: vm.ffpUser.balance, currency: \'miles\' } | price"></strong><div class="milesCross" ng-click="vm.logoutFFP();"><i class="icon_remove"></i><div class="infoDrop"><div class="infoDrop__i"><p>{{ \'web.search.bonus.logoutLabel\' | aliasStatic}}</p></div></div></div></div></div></div></div><div class="content content-search-result" ng-if="vm.showRestoreSearchMessage"><div class="wrap wrap_pt32"><div class="content__i"><div class="infoMessage infoMessage_info infoMessage_restoreSearch"><div class="infoMessage__i"><p>{{ \'web.messages.updateSearch\' | aliasStatic}}</p><p>{{ \'web.messages.restoreSearchTextStart\' | aliasStatic}} <a href="" ng-click="vm.restoreLastSearch();" class="link">{{ \'web.messages.restoreSearchLink\' | aliasStatic}}</a> {{ \'web.messages.restoreSearchTextEnd\' | aliasStatic}}</p></div></div></div></div></div><div class="content content-search-result" ng-if="vm.searchResult || vm.searchResultErrorButHasPeriodVariants"><div class="wrap wrap_pt32"><div class="content__i"><div ng-if="vm.searchResultErrorButHasPeriodVariants" class="orderSearchError"><div class="orderSearchError__i"><p ng-bind-html="\'web.messages.searchResultErrorButHasPeriodVariants.header\' | aliasStatic"></p><p ng-bind-html="\'web.messages.searchResultErrorButHasPeriodVariants.text\' | aliasStatic"></p></div></div><wrap ng-if="!vm.ffpUser"><search-mono-brand-cartesian-variants ng-if="( \'search.useMonoBrandCartesian\' | param )" result="vm.searchResult" period="vm.searchResultPeriod" loading="vm.loadingPeriodVariants" params="vm.searchParams" limits="vm.bookingLimits" resubmit="vm.searchSubmitHandler" select="vm.monoBrandCartesianVariantSelectHandler"></search-mono-brand-cartesian-variants><wrap ng-if="!( \'search.useMonoBrandCartesian\' | param )"><search-variants ng-if="!vm.searchResult.fareGroups" result="vm.searchResult" params="vm.searchParams" select="vm.variantSelectHandler"></search-variants><search-fare-group-variants ng-if="vm.searchResult.fareGroups" result="vm.searchResult" period="vm.searchResultPeriod" loading="vm.loadingPeriodVariants" params="vm.searchParams" limits="vm.bookingLimits" resubmit="vm.searchSubmitHandler" select="vm.fareGroupVariantSelectHandler"></search-fare-group-variants></wrap></wrap><search-ffp-variants ng-if="vm.ffpUser" result="vm.searchResult" period="vm.searchResultPeriod" params="vm.searchParams" limits="vm.bookingLimits" resubmit="vm.searchSubmitHandler" select="vm.ffpVariantSelectHandler"></search-ffp-variants><a name="selected-variant"></a><selected-variant ng-if="vm.selectedVariantsInfo" loading="vm.loadingPricingVariant" info="vm.selectedVariantsInfo" pricing="vm.pricingVariant"></selected-variant><div ng-if="vm.pricingVariantError" class="infoMessage infoMessage_error"><div class="infoMessage__i"><p>{{ vm.pricingVariantError | aliasDynamic }}</p></div></div><div class="searchResultsControl" ng-if="vm.searchResult"><div class="searchResultsControl__i"><a ng-href="#{{vm.pricingVariant ? $root.ROUTES.PASSENGERS : $root.ROUTES.SEARCH}}" class="btn btn_next" ng-class="{ disabled: (!vm.pricingVariant || vm.loadingPricingVariant), \'loading-start\': vm.loadingPricingVariant }"><span class="loader" ng-if="vm.loadingPricingVariant"><img alt="" src="themes/websky/assets/static/img/general/form/loader-circle-64.gif"></span> <span class="mobileHide">{{ vm.isSinglePassenger(vm.searchParams.passengers) ? ( \'web.buttons.gotoPassenger\' | aliasStatic) : ( \'web.buttons.gotoPassengers\' | aliasStatic) }}</span> <span class="mobileShow">{{ \'web.buttons.next\' | aliasStatic}}</span></a></div></div></div></div></div><div class="push"></div></section><app-footer ng-if="!vm.loading"></app-footer><popup-intermodal ng-if="!vm.loading" list="vm.intermodalList"></popup-intermodal>')}])}();