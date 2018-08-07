import {Component, OnInit} from '@angular/core';
import {ContinentService} from '../continent.service';
import {CountryService} from '../country.service';
import {CityService} from '../city.service';
import {HotelService} from '../hotel.service';
import {AirportService} from "../airport.service";


@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  constructor(private continentService: ContinentService,
              private countryService: CountryService,
              private cityService: CityService,
              private hotelService: HotelService,
              private airportService: AirportService) {
  }

  selectedContinent: number = 0;
  selectedCountry: number = 0;
  selectedCity: number = 0;
  selectedHotel: number = 0;
  selectedAirport: number = 0;
  continent = this.continentService.getContinent();
  country;
  city;
  hotel;
  airport;


  ngOnInit() {
  }


  onChangeContinent(selectedContinent) {
    console.log(selectedContinent);
    this.selectedContinent = selectedContinent;
    this.country = this.countryService.getCountryFindByContinentEntity_id(this.selectedContinent);
  }

  onChangeCountry(selectedCountry) {
    console.log(selectedCountry);
    this.selectedCountry = selectedCountry;
    this.city = this.cityService.getCityFindByCountryEntity_Id(this.selectedCountry);
  }

  onChangeCity(selectedCity) {
    console.log(selectedCity);
    this.selectedCity = selectedCity;
    this.hotel = this.hotelService.getHotelFindByCityEntity_id(this.selectedCity);
    this.airport = this.airportService.getAirportFindByCityEntity_Id(this.selectedCity);
  }

  onChangeHotel(selectedHotel) {
    console.log(selectedHotel);
    this.selectedHotel = selectedHotel;
  }

  onChangeAirport(selectedAirport) {
    console.log(selectedAirport);
    this.selectedAirport = selectedAirport;

  }
}








