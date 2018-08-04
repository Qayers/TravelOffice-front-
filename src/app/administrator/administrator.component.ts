import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ContinentService } from '../continent.service';
import { Continent } from '../model/continent';
import { ContinentSeries } from '../model/ContinentSeries';
import {CitySeries} from '../model/CitySeries';
import { CityService } from '../city.service';
import { CountrySeries } from '../model/CountrySeries';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  public continents :ContinentSeries;
  public cities:CitySeries;
  public countries:CountrySeries;


  constructor(private continentService: ContinentService, private cityService: CityService, private countryService: CountryService) { }

continent = this.continentService.getContinent();
city = this.cityService.getCity();
country= this.countryService.getCountry(); 


}

