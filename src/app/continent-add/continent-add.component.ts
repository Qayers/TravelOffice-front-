import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { ContinentSeries } from '../model/ContinentSeries';
import { ContinentService } from '../continent.service';

@Component({
  selector: 'app-continent-add',
  templateUrl: './continent-add.component.html',
  styleUrls: ['./continent-add.component.css']
})
export class ContinentAddComponent {
  public continents: ContinentSeries;
  public continent_name;
  public messageDisplay;


  constructor(private continentService: ContinentService, private location: Location) { }


  addContinent(name) {
    let continent = { name: name };
    this.continentService.addHttpContinent(continent)
      .subscribe(
        data => {
          console.log(data);
          {{this.messageDisplay = "dodano " + data.name}}

        },
        error => {
          console.error("error with saving continent");
          return Observable.throw(error);
        }
      )
  }

  goBack(): void {
    this.location.back();
  }
}
