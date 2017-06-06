import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Country } from "./viewmodels/Country";
import { AppService } from "./services/app.service";

@Component({
    selector: 'orionhrms2',
    templateUrl: '../partials/countries.html'
})
export class AppComponent implements OnInit {

    title: string;
    items: Country[];
    errorMessage: string;
    show : boolean;
    constructor(private appService: AppService) {
        //called first time before the ngOnInit()
        this.title = "Orion HRMS";
    }

    ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges()
        this.title = "Orion HRMS Countries";
        var service = this.appService.getAllCountries();
        service.subscribe(
            items => this.items = items,
            error => this.errorMessage = <any>error
        );
    }
    public Expand() {
        this.show = !this.show;
    }
}