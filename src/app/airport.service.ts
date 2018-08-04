import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AirportSeries } from './model/AirportSeries';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 
@Injectable({
  providedIn: 'root'
})
export class AirportService {


  public airports:AirportSeries;
  constructor(private http: HttpClient) {}

  getHttpAirport() {
    return this.http.get<AirportSeries>('http://localhost:8080/airport');
  }
 
 getCountry() {
  this.getHttpAirport().subscribe(
    data =>
    {
      this.airports=data;
    },
    err => console.error(err),
    () => console.log('done loading airports')
  );
} 


}
