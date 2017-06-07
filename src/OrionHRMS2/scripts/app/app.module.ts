/// <reference path="../../typings/index.d.ts" />
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import "rxjs/Rx";

import { AppComponent } from "./app.component";
import { CountryListComponent } from "./components/country-list.component";

import { AppRouting } from "./app.routing";
import { AppService } from "./services/app.service";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
        CountryListComponent,
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        InlineEditorModule,
        //Ng2Bs3ModalModule,
        AppRouting

    ],
    // providers
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }  