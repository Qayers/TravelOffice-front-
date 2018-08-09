import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ContinentService } from '../continent.service';
import { Continent } from '../model/continent';
import { ContinentSeries } from '../model/ContinentSeries';
import { CitySeries } from '../model/CitySeries';
import { CityService } from '../city.service';
import { CountrySeries } from '../model/CountrySeries';
import { CountryService } from '../country.service';
import { AirportService } from '../airport.service';
import { AirportSeries } from '../model/AirportSeries';
import { HotelSeries } from '../model/HotelSeries';
import { HotelService } from '../hotel.service';
import { TripService } from '../trip.service';
import { Trip } from '../model/trip';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  public cities: CitySeries;
  public countries: CountrySeries;
  public airports: AirportSeries;
  public hotels: HotelSeries;

  public cityTo;
  public countOfDays;
  public countOfPerson;
  public departureDate;
  public description;
  public priceForAdult;
  public priceForChild;
  public promotion;
  public returnDate;
  public airportEntityFrom;
  public airportEntityTo;
  public hotelEntity;

  public messageDisplay;

  constructor(private continentService: ContinentService,
    private cityService: CityService,
    private countryService: CountryService,
    private airportService: AirportService,
    private hotelService: HotelService,
    private tripService: TripService) { }


  city = this.cityService.getCity();
  country = this.countryService.getCountry();
  airport = this.airportService.getAirport();
  hotel = this.hotelService.getHotel();


  addTrip() {
    let trip = new Trip;
    trip.cityTo = this.cityTo;
    trip.countOfDays = this.countOfDays;
    trip.countOfPerson = this.countOfPerson;
    trip.departureDate = this.departureDate;
    trip.description = this.description;
    trip.priceForAdult = this.priceForAdult;
    trip.priceForChild = this.priceForChild;
    trip.promotion = this.promotion;
    trip.returnDate = this.returnDate;
    trip.airportEntityFrom = this.airportEntityFrom;
    trip.airportEntityTo = this.airportEntityTo;
    trip.hotelEntity = this.hotelEntity;

    this.tripService.addHttpTrip(trip)
      .subscribe(
        data => {
          console.log(data);
          {{this.messageDisplay = "dodano " + data.name}}
        },
        error => {
          console.error("error with saving trip");
          console.log(error);
          return Observable.throw(error);
        }
      )
  }


}

