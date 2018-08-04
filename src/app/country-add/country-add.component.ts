import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../continent.service';
import { CountryService } from '../country.service';
import { ContinentSeries } from '../model/ContinentSeries';
import { CountrySeries } from '../model/CountrySeries';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

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

  constructor(private continentService: ContinentService, private countryService: CountryService, private location: Location) { }

  continent = this.continentService.getContinent();
  country = this.countryService.getCountry();


  addCountry(name, continentID) {
    let country = { name: name };
    this.countryService.addHttpContinent(country)
      .subscribe(
        data => {
          console.log(data);
          this.country_name = name;
          this.continent_id = continentID;
        },
        error => {
          console.error("error with saving country");
          return Observable.throw(error);
        }
      )
  }

  goBack(): void {
    this.location.back();
  }
}
