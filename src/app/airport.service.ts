import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AirportSeries} from './model/AirportSeries';
import {Airport} from './model/airport';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AirportService {


  public airports: AirportSeries;

  constructor(private http: HttpClient) {
  }

  addHttpAirport(airport) {
    return this.http.post<Airport>('http://localhost:8080/addAirport', airport);
  }


  getHttpAirport() {
    return this.http.get<AirportSeries>('http://localhost:8080/airport');
  }

  getAirport() {
    this.getHttpAirport().subscribe(
      data => {
        this.airports = data;
      },
      err => console.error(err),
      () => console.log('done loading airports')
    );
  }

  getHttpAirportFindByCityEntity_Id(id: number) {
    return this.http.get<AirportSeries>('http://localhost:8080/AirportsFindByCityEntity_Id/' + id);
  }


  getAirportFindByCityEntity_Id(id: number) {
    this.getHttpAirportFindByCityEntity_Id(id).subscribe(
      data => {
        this.airports = data;
      },
      err => console.error(err),
      () => console.log('done loading airports')
    );
  }
}


