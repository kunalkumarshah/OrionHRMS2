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
    getCountry(id: string) {
        if (id == null) throw new Error("id is required.");
        var url = this.countriesUrl + id;
        return this.http.get(url)
            .map(response => <Country>response.json())
            .catch(this.handleError);
    }

    saveCountry(country: Country) {
        if (country == null) throw new Error("Country not found.");
        var url = this.countriesUrl;
        return this.http.post(url, country)
            .map(response => <Country>response.json())
            .catch(this.handleError);
    }

    deleteCountry(id: string) {
        if (id == null) throw new Error("id is required.");
        var url = this.countriesUrl + id;
        return this.http.delete(url)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}