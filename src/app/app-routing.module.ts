import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { LastMinuteComponent } from './last-minute/last-minute.component';
import { WycieczkiLokalneComponent } from './wycieczki-lokalne/wycieczki-lokalne.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'administrator', component: AdministratorComponent },
  { path: 'last-minute', component: LastMinuteComponent },
  { path: 'wycieczki-lokalne', component: WycieczkiLokalneComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'regulamin', component: RegulaminComponent},
  { path: '',redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
