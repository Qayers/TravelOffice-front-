import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ContinentService } from '../continent.service';
import { ContinentSeries } from '../model/ContinentSeries';
import { CountrySeries} from '../model/CountrySeries';
import { CountryService } from '../country.service';
import {CityService} from '../city.service';
import {CitySeries} from '../model/CitySeries';
import {HotelService} from '../hotel.service';
import {HotelSeries} from '../model/HotelSeries';


@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  public continents:ContinentSeries;
  public countries:CountrySeries;
  public cities:CitySeries;
  public hotels:HotelSeries;
    
  
  constructor(private continentService: ContinentService, private countryService: CountryService,private cityService: CityService,private hotelService: HotelService) {}

    continent = this.continentService.getContinent();
    country = this.getCountry();
    city =this.getCity();
    hotel =this.getHotel();

    // getContinent() {
    //   this.continentService.getContinent().subscribe(
    //     data =>
    //     {
    //       this.continents=data;
    //     },
    //     err => console.error(err),
    //     () => console.log('done loading continents')
    //   );  
    // }  
    getCountry() {
      this.countryService.getCountry().subscribe(
        data =>
        {
          this.countries=data;
        },
        err => console.error(err),
        () => console.log('done loading continents')
      );
    }  
    getCity() {
      this.cityService.getCity().subscribe(
        data =>
        {
          this.cities=data;
        },
        err => console.error(err),
        () => console.log('done loading continents')
      );
    }  
    getHotel() {
      this.hotelService.getHotel().subscribe(
        data =>
        {
          this.hotels=data;
        },
        err => console.error(err),
        () => console.log('done loading continents')
      );
    }  


    ngOnInit() {}


  }


