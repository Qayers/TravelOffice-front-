import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HotelSeries } from './model/HotelSeries';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class HotelService {

  public hotels:HotelSeries;
  
  constructor(private http: HttpClient) { }
  
  getHttpHotel() {
  return this.http.get<HotelSeries>('http://localhost:8080/hotel');
}

getHotel() {
  this.getHttpHotel().subscribe(
    data =>
    {
      this.hotels=data;
    },
    err => console.error(err),
    () => console.log('done loading continents')
  );
}
}