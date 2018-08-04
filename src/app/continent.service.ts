import { Injectable } from '@angular/core';
import { Continent } from './model/continent';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  constructor(private http: HttpClient) { }

  addContinent(continent) {
    let body = JSON.stringify(continent);
    return this.http.post<Continent>('http://localhost:8080/addContinent', continent, httpOptions);

  }

  getContinent() {
    return this.http.get<ContinentSeries>('http://localhost:8080/continent');
  }

}