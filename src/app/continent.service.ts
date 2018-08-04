import { Injectable } from '@angular/core';
import { Continent } from './model/continent';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ContinentSeries } from './model/ContinentSeries';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ContinentService {
  
  public continents :ContinentSeries;

  constructor(private http: HttpClient) { }

  addContinent(continent) {
    let body = JSON.stringify(continent);
    return this.http.post<Continent>('http://localhost:8080/addContinent', continent, httpOptions);
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