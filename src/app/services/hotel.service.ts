import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Grocery } from '../models/grocery';
import { Hotel } from '../models/hotel';

@Injectable({ providedIn: 'root'})
export class HotelService {
  private apiServerUrl ="http://localhost:8080/hotels";

  constructor(private http: HttpClient) { }

  public getHotels(): Observable <Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiServerUrl}`);
  }
}
