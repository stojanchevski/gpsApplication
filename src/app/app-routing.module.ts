import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { BeachesComponent } from './beaches/beaches.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HotelsComponent } from './hotels/hotels.component';
import { OilsComponent } from './oils/oils.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ShopsComponent } from './shops/shops.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'banks',component:BanksComponent},
  {path:'beaches',component:BeachesComponent},
  {path:'hotels',component:HotelsComponent},
  {path:'oils',component:OilsComponent},
  {path:'restaurants',component:RestaurantsComponent},
  {path:'shops',component:ShopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
