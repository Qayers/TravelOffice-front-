import { Component, OnInit } from '@angular/core';
import { CitySeries } from '../model/CitySeries';
import { CityService } from '../city.service';
import { AirportService } from '../airport.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Hotel } from '../model/hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-add',
  templateUrl: './hotel-add.component.html',
  styleUrls: ['./hotel-add.component.css']
})
export class HotelAddComponent {

  public cities: CitySeries;

  public airport_name;

  public name;
  public selectedValue;
  public description;
  public standard;

  constructor(private cityService: CityService, private hotelService: HotelService, private location: Location) { }

  city = this.cityService.getCity();


  addHotel() {
    let hotel: Hotel = new Hotel();
    hotel.name = this.name;
    hotel.description = this.description;
    hotel.cityEntity = this.selectedValue;
    hotel.standard = this.standard;


    this.hotelService.addHttpHotel(hotel)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error("error with saving hotel");
          console.log(error);
          return Observable.throw(error);
        }
      )
  }

  goBack(): void {
    this.location.back();
  }

}
