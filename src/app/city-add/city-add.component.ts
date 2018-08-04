import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { CountryService } from '../country.service';
import { CitySeries } from '../model/CitySeries';
import { CountrySeries } from '../model/CountrySeries';
import { Location } from '@angular/common';


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent  {

  public cities:CitySeries;
  public countries:CountrySeries;

  constructor(private cityService: CityService, private countryService: CountryService, private location:Location) { }

  country= this.countryService.getCountry(); 

  goBack(): void {
    this.location.back();
  }
}
