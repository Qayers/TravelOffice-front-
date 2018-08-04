import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../continent.service';
import { CountryService } from '../country.service';
import {CityService} from '../city.service';
import {HotelService} from '../hotel.service';


@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  
  constructor(private continentService: ContinentService,
     private countryService: CountryService,
     private cityService: CityService,
     private hotelService: HotelService) {}

    continent = this.continentService.getContinent();
    country = this.countryService.getCountry();
    city =this.cityService.getCity();
    hotel =this.hotelService.getHotel();

    ngOnInit() {}
  }


