import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Country } from "../viewmodels/Country";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {
    constructor(private http: Http)
    { }

    //URL to web api
    private countriesUrl = 'api/countries/';

    getAllCountries() {
        return this.http.get(this.countriesUrl)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}