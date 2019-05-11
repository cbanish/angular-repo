import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable()
export class CountriesService{

constructor(private http:HttpClient){

}

public getCountries(){
    let url:string="https://restcountries.eu/rest/v2/all";
    return this.http.get(url);
}

public getCountryDetail(countryName:string){
    let url:string="https://restcountries.eu/rest/v2/name/'+countryName+'?fullText=true";
    return this.http.get(url);
}

}