import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "./services/app.service";

@Component({
    selector: 'orionhrms2',
    template: '<h1>{{title}}</h1><router-outlet></router-outlet>'
})
export class AppComponent {
    title = "Countries";
}
