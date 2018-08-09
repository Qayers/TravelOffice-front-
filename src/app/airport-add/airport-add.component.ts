import { Component, OnInit } from '@angular/core';
import { CitySeries } from '../model/CitySeries';
import { CityService } from '../city.service';
import { AirportService } from '../airport.service';
import { Airport } from '../model/airport';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-airport-add',
  templateUrl: './airport-add.component.html',
  styleUrls: ['./airport-add.component.css']
})
export class AirportAddComponent  {

  public cities: CitySeries;

  public messageDisplay;

  public name;
  public selectedValue;

  constructor(
    private cityService: CityService, private airportService: AirportService, private location: Location) { }

  city = this.cityService.getCity();


  addAirport() {
    let airport: Airport = new Airport();
    airport.name=this.name;
    airport.cityEntity=this.selectedValue;

    this.airportService.addHttpAirport(airport)
      .subscribe(
        data => {
          console.log(data);
          {{this.messageDisplay = "dodano " + data.name}}

        },
        error => {
          console.error("error with saving airport");
          console.log(error);
          return Observable.throw(error);
        }
      )
  }

  goBack(): void {
    this.location.back();
  }
}
