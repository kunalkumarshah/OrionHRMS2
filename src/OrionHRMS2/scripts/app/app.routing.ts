import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CountryListComponent } from "./components/country-list.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/countries',
        pathMatch: 'full'
    },
    {
        path: 'countries',
        component: CountryListComponent
    },
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);  