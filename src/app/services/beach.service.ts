import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Beach } from '../models/beach';

@Injectable({ providedIn: 'root'})
export class BeachService {
  private apiServerUrl ="http://localhost:8080/beaches";

  constructor(private http: HttpClient) { }

  public getBeaches(): Observable <Beach[]> {
    return this.http.get<Beach[]>(`${this.apiServerUrl}`);
  }
}
