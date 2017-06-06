System.register(["@angular/router", "./components/country-list.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, country_list_component_1, routes, AppRoutingProviders, AppRouting;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (country_list_component_1_1) {
                country_list_component_1 = country_list_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                {
                    path: '',
                    redirectTo: '/countries',
                    pathMatch: 'full'
                },
                {
                    path: 'countries',
                    component: country_list_component_1.CountryListComponent
                },
            ];
            exports_1("AppRoutingProviders", AppRoutingProviders = []);
            exports_1("AppRouting", AppRouting = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map