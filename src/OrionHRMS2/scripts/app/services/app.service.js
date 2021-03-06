System.register(["@angular/core", "@angular/http", "rxjs/Observable"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, AppService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            AppService = (function () {
                function AppService(http) {
                    this.http = http;
                    //URL to web api
                    this.countriesUrl = 'api/countries/';
                }
                AppService.prototype.getAllCountries = function () {
                    return this.http.get(this.countriesUrl)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.getCountry = function (id) {
                    if (id == null)
                        throw new Error("id is required.");
                    var url = this.countriesUrl + id;
                    return this.http.get(url)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.saveCountry = function (country) {
                    if (country == null)
                        throw new Error("Country not found.");
                    var url = this.countriesUrl;
                    return this.http.post(url, country)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                AppService.prototype.deleteCountry = function (id) {
                    if (id == null)
                        throw new Error("id is required.");
                    var url = this.countriesUrl + id;
                    return this.http.delete(url)
                        .catch(this.handleError);
                };
                AppService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || "Server error");
                };
                return AppService;
            }());
            AppService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], AppService);
            exports_1("AppService", AppService);
        }
    };
});
//# sourceMappingURL=app.service.js.map