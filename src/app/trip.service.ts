import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TripSeries} from './model/TripSeries';
import {Trip} from './model/trip';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TripService {

  public trips: TripSeries;

  constructor(private http: HttpClient) {
  }

  addHttpTrip(trip) {
    return this.http.post<Trip>('http://localhost:8080/addTrip', trip);
  }

  getHttpTrip() {
    return this.http.get<TripSeries>('http://localhost:8080/tripFrom');
  }

  getHttpTripCito_Id(id: number) {
    return this.http.get<TripSeries>('http://localhost:8080/tripFindByCitiTo_Id/' + id);
  }

  getHttpTripCountry_Id(id: number) {
    return this.http.get<TripSeries>('http://localhost:8080/tripFindByCountry_Id/' + id);
  }

  getHttpTripContinent_Id(id: number) {
    return this.http.get<TripSeries>('http://localhost:8080/tripFindByContinent_Id/' + id);
  }

  getTrip() {
    this.getHttpTrip().subscribe(
      data => {
        this.trips = data;
      },
      err => console.error(err),
      () => console.log('done loading trips')
    )
  }

  getTripFindByCityTo_Id(id: number) {
    this.getHttpTripCito_Id(id).subscribe(
      data => {
        this.trips = data;
      },
      err => console.error(err),
      () => console.log('done loading trips')
    );
  }

  getTripFindByCountry_Id(id: number) {
    this.getHttpTripCountry_Id(id).subscribe(
      data => {
        this.trips = data;
      },
      err => console.error(err),
      () => console.log('done loading trips')
    );
  }

  getTripFindByContinent_Id(id: number) {
    this.getHttpTripContinent_Id(id).subscribe(
      data => {
        this.trips = data;
      },
      err => console.error(err),
      () => console.log('done loading trips')
    );
  }

}




