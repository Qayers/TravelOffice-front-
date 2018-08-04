import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ContinentService } from '../continent.service';

import { Continent } from '../model/continent';
import { ContinentSeries } from '../model/ContinentSeries';


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

  constructor(private continentService: ContinentService) { }

continent = this.getContinent();
 // continent: Continent;
  

  getContinent() {
    this.continentService.getContinent().subscribe(
      data => {
        this.continents = data;

        // this.id = data[0].id;
        // this.nameT = data[0].name;
      },
      err => console.error(err),
      () => console.log('done loading continents')
    );
  }


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

