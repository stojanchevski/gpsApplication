import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BanksComponent } from './banks/banks.component';
import { BeachesComponent } from './beaches/beaches.component';
import { OilsComponent } from './oils/oils.component';
import { ShopsComponent } from './shops/shops.component';
import { HotelsComponent } from './hotels/hotels.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { BankService } from './bank.service';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapTestComponent } from './map-test/map-test.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BanksComponent,
    BeachesComponent,
    OilsComponent,
    ShopsComponent,
    HotelsComponent,
    RestaurantsComponent,
    MapTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgcsVWVj2VvSML42qOVGKeCfaSPadRyss',
      // libraries: ['']
    })
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
