import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CountrySeries } from './model/CountrySeries';
import { Country } from './model/country';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  public countries:CountrySeries;

  constructor(private http: HttpClient) {}
    
  addHttpContinent(country) {
    // let body = JSON.stringify(country);
    return this.http.post<Country>('http://localhost:8080/addCountry', country);
  }
    getHttpCountry() {
      return this.http.get<CountrySeries>('http://localhost:8080/country');
    }
   
   getCountry() {
    this.getHttpCountry().subscribe(
      data =>
      {
        this.countries=data;
      },
      err => console.error(err),
      () => console.log('done loading countries')
    );
  } 
}