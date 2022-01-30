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
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgSelectModule } from '@ng-select/ng-select';
//unused imports removed

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
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
