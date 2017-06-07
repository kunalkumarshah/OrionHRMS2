import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"; 
import { Country } from "../viewmodels/Country";
import { AppService } from "../services/app.service";

@Component({
    selector: 'orionhrms2',
    templateUrl: '../partials/countries.html'
})

export class CountryListComponent implements OnInit {

    items: Country[];
    item: Country;
    errorMessage: string;
    constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) {
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
    public editCountry() {
        this.appService.saveCountry(this.item).subscribe(
            item => { this.item = item; this.router.navigate(['/countries']); },
            error => console.log(error)
        )
    }
   
    //public Expand(country: Country) {
    //    country.show = !country.show;
    //}

}