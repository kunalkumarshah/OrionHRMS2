System.register(["@angular/core", "@angular/router", "../services/app.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, app_service_1, CountryListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            CountryListComponent = (function () {
                function CountryListComponent(appService, router, route) {
                    this.appService = appService;
                    this.router = router;
                    this.route = route;
                    //called first time before the ngOnInit()        
                }
                CountryListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //called after the constructor and called  after the first ngOnChanges()
                    var service = this.appService.getAllCountries();
                    service.subscribe(function (items) { return _this.items = items; }, function (error) { return _this.errorMessage = error; });
                };
                CountryListComponent.prototype.editCountry = function () {
                    var _this = this;
                    this.appService.saveCountry(this.item).subscribe(function (item) { _this.item = item; _this.router.navigate(['/countries']); }, function (error) { return console.log(error); });
                };
                return CountryListComponent;
            }());
            CountryListComponent = __decorate([
                core_1.Component({
                    selector: 'orionhrms2',
                    templateUrl: '../partials/countries.html'
                }),
                __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
            ], CountryListComponent);
            exports_1("CountryListComponent", CountryListComponent);
        }
    };
});
//# sourceMappingURL=country-list.component.js.map