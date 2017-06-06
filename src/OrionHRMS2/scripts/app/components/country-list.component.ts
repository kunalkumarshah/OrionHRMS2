import { Component, OnInit } from "@angular/core";
import { Country } from "../viewmodels/Country";
import { AppService } from "../services/app.service";

@Component({
    selector: 'orionhrms2',
    templateUrl: '../partials/countries.html'
})

export class CountryListComponent implements OnInit {

    items: Country[];
    errorMessage: string;

    constructor(private appService: AppService) {
        //called first time before the ngOnInit()
    }
        
    ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges()
        var service = this.appService.getAllCountries();
        service.subscribe(
            items => this.items = items,
            error => this.errorMessage = <any>error
        );
    }

    //public Expand(country: Country) {
    //    country.show = !country.show;
    //}

}