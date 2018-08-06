import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../continent.service';
import { CountryService } from '../country.service';
import { ContinentSeries } from '../model/ContinentSeries';
import { CountrySeries } from '../model/CountrySeries';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent {


  public continents: ContinentSeries;
  public countries: CountrySeries;

  public country_name;
  public continent_id;

  public name;
  public selectedValue;

  constructor(private continentService: ContinentService, private countryService: CountryService, private location: Location) { }

  continent = this.continentService.getContinent();
  country = this.countryService.getCountry();


  addCountry() {
    let country: Country = new Country();
    country.name=this.name;
    country.continentEntity=this.selectedValue;
    
    this.countryService.addHttpContinent(country)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error("error with saving country");
          console.log(error);
          return Observable.throw(error);
        }
      )
  }

  goBack(): void {
    this.location.back();
  }
}
