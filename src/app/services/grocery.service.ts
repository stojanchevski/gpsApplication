import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Grocery } from '../models/grocery';

@Injectable({ providedIn: 'root'})
export class GroceryService {
  private apiServerUrl ="http://localhost:8080/grocery";

  constructor(private http: HttpClient) { }

  public getGroceries(): Observable <Grocery[]> {
    return this.http.get<Grocery[]>(`${this.apiServerUrl}`);
  }
}
