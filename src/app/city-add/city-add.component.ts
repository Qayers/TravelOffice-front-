import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { CountryService } from '../country.service';
import { CitySeries } from '../model/CitySeries';
import { CountrySeries } from '../model/CountrySeries';
import { Location } from '@angular/common';
import { City } from '../model/city';
import { Observable } from 'rxjs';
import {PreviousRouteService} from "../previous-route.service";


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent{



  public cities:CitySeries;
  public countries:CountrySeries;

  public messageDisplay = "zapisano poprawnie!";

  public name;
  public selectedValue;
  public previousUrl = this.previousRouteService.getPreviousUrl()+"/";


  constructor(private cityService: CityService,
              private countryService: CountryService,
              private location:Location,
              private previousRouteService: PreviousRouteService) { }

  country= this.countryService.getCountry();

  addCity() {
    let city: City = new City();
    city.name=this.name;
    city.countryEntity=this.selectedValue;

    this.cityService.addHttpCity(city)
      .subscribe(
        data => {
          console.log(data);
          {{this.messageDisplay}}
          console.log(this.previousRouteService.getPreviousUrl());
        },
        error => {
          console.error("error with saving city");
          console.log(error);
          return Observable.throw(error);
        }
      )
  }

  goBack(): void {
    // this.location.back();
    this.previousRouteService.getPreviousUrl();
  }
}
