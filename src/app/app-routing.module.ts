import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { BeachesComponent } from './beaches/beaches.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelsComponent } from './hotels/hotels.component';
import { OilsComponent } from './oils/oils.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ShopsComponent } from './shops/shops.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { MapTestComponent } from './map-test/map-test.component';
import { HereMapComponent } from './here-map/here-map.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'banks',component:BanksComponent},
  {path:'beaches',component:BeachesComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'gas-stations',component:OilsComponent},
  {path:'restaurants',component:RestaurantsComponent},
  {path:'groceries',component:ShopsComponent},
  {path:'maps',component:HereMapComponent},
  {path:'test',component:MapTestComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgcsVWVj2VvSML42qOVGKeCfaSPadRyss',
      libraries: ['']
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
