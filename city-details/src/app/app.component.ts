import { Component } from '@angular/core';
import { CountriesService } from './countries.http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [CountriesService]
})
export class AppComponent {
  title = 'city-details';

  public cityDetails:any ={
    country:'',
    city:'',
    humidity:0,
    pressure:0
  }

  constructor(private countriesService:CountriesService){

  }
  
  public getForecast():void{

    this.countriesService.getCountryDetail('India').
    subscribe(result=>this.setWeatherData(result.json()));
  }


  private setWeatherData(cityData:any){

    this.cityDetails.country=cityData[0].name;
    this.cityDetails.city=cityData[0].capital;
  }
}
