/// <reference path="../../typings/index.d.ts" />
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import "rxjs/Rx";

import { AppComponent } from "./app.component";
import { AppService } from "./services/app.service";

@NgModule({
    // directives, components, and pipes
    declarations: [
        AppComponent,
    ],
    // modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule

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