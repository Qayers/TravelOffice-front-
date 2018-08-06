import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { TripSeries } from './model/TripSeries';
import { Trip } from './model/trip';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable({
  providedIn: 'root'
})
export class TripService {

  public trips:TripSeries;

  constructor(private http: HttpClient) {}

  addHttpTrip(trip) {
    return this.http.post<Trip>('http://localhost:8080/addTrip', trip);
  }

  getHttpTrip() {
    return this.http.get<TripSeries>('http://localhost:8080/tripFrom');
  }
 
 getTrip() {
  this.getHttpTrip().subscribe(
    data =>
    {
      this.trips=data;
    },
    err => console.error(err),
    () => console.log('done loading trips')
  );
} 




}
