import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AppRoutingModule } from './/app-routing.module';
import { LastMinuteComponent } from './last-minute/last-minute.component';
import { WycieczkiLokalneComponent } from './wycieczki-lokalne/wycieczki-lokalne.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { RegulaminComponent } from './regulamin/regulamin.component';
import { TitleComponent } from './title/title.component';
import { BrowserComponent } from './browser/browser.component';


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
    BrowserComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
