import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CitySeries} from './model/CitySeries';
import {City} from './model/city';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
    providedIn: 'root'
  }
)
export class CityService {

  public cities: CitySeries;

  constructor(private http: HttpClient) {
  }

  addHttpCity(city) {
    return this.http.post<City>('http://localhost:8080/addCity', city);
  }

  getHttpCity() {
    return this.http.get<CitySeries>('http://localhost:8080/city');
  }

  getHttpCityFindByCountryEntity_Id(id: number) {
    return this.http.get<CitySeries>('http://localhost:8080/findByCountryEntity_Id/' + id);
  }

  getCity() {
    this.getHttpCity().subscribe(
      data => {
        this.cities = data;
      },
      err => console.error(err),
      () => console.log('done loading cities')
    )
  }


  getCityFindByCountryEntity_Id(id: number) {
    this.getHttpCityFindByCountryEntity_Id(id).subscribe(
      data => {
        this.cities = data;
      },
      err => console.error(err),
      () => console.log('done loading cities')
    );


  }
}
