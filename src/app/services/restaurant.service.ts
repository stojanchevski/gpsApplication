import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({ providedIn: 'root'})
export class RestaurantService {
  private apiServerUrl ="http://localhost:8080/restaurants";

  constructor(private http: HttpClient) { }

  public getRestaurants(): Observable <Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.apiServerUrl}`);
  }
}
