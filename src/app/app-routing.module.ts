import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { LastMinuteComponent } from './last-minute/last-minute.component';
import { WycieczkiLokalneComponent } from './wycieczki-lokalne/wycieczki-lokalne.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { AppComponent } from './app.component';
import { ContinentAddComponent } from './continent-add/continent-add.component';
import { CountryAddComponent } from './country-add/country-add.component';
import { CityAddComponent } from './city-add/city-add.component';


const routes: Routes = [
  { path: 'administrator', component: AdministratorComponent },
  { path: 'last-minute', component: LastMinuteComponent },
  { path: 'wycieczki-lokalne', component: WycieczkiLokalneComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'regulamin', component: RegulaminComponent },
  { path: 'administrator/city-add/country-add/continent-add', component: ContinentAddComponent },
  { path: 'administrator/city-add/country-add', component: CountryAddComponent },
  { path: 'administrator/city-add', component: CityAddComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
