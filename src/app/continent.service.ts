import { Injectable } from '@angular/core';
import { Continent } from './model/continent';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ContinentSeries } from './model/ContinentSeries';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ContinentService {
  
  public continents :ContinentSeries;
  public continent_name;

  constructor(private http: HttpClient) { }

  addHttpContinent(continent) {
    let body = JSON.stringify(continent);
    return this.http.post<Continent>('http://localhost:8080/addContinent', continent, httpOptions);
  }

  
  addContinent(name) {
    let continent = { name: name };
    this.addHttpContinent(continent)
      .subscribe(
        data => {
          console.log(data);
          this.continent_name = name;
        },
        error => {
          console.error("error with saving continent");
          return Observable.throw(error);
        }
      )
  }

  getHttpContinent() {
    return this.http.get<ContinentSeries>('http://localhost:8080/continent');
  }

  getContinent() {
    this.getHttpContinent().subscribe(
      data => {
        this.continents = data;
      },
      err => console.error(err),
      () => console.log('done loading continents')
    );
  }
}