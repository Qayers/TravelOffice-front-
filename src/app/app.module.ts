import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AppRoutingModule } from './/app-routing.module';
import { LastMinuteComponent } from './last-minute/last-minute.component';
import { WycieczkiLokalneComponent } from './wycieczki-lokalne/wycieczki-lokalne.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdministratorComponent,
    LastMinuteComponent,
    WycieczkiLokalneComponent,
    KontaktComponent,
    RegulaminComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
