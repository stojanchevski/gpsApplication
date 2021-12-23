import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restauranrsList : Restaurant[];

  constructor(private restaurantService : RestaurantService) {}

  ngOnInit() {
    this.getRestaurants();
  }

    public getRestaurants(): void {
      this.restaurantService.getRestaurants().subscribe(data =>{
        this.restauranrsList = data;}
      );
    }

}
