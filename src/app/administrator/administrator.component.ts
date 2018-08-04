import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ContinentService } from '../continent.service';
import { Continent } from '../model/continent';
import { ContinentSeries } from '../model/ContinentSeries';
// import {GetEntities} from '../getEntities';
@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  public continents :ContinentSeries;
  public continent_name;
  public nameT;
  public id;
   
// constructor(private getEntities: GetEntities){}
// continent = this.getEntities.getContinent();

  constructor(private continentService: ContinentService) { }

continent = this.continentService.getContinent();

  // getContinent() {
  //   this.continentService.getContinent().subscribe(
  //     data => {
  //       this.continents = data;
  //     },
  //     err => console.error(err),
  //     () => console.log('done loading continents')
  //   );
  // }


  addContinent(name) {
    let continent = { name: name };
    this.continentService.addContinent(continent)
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

}

