import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { gasStation } from '../models/gasStation';

@Injectable({ providedIn: 'root'})
export class GasStationService {
  private apiServerUrl ="http://localhost:8080/gas-stations";

  constructor(private http: HttpClient) { }

  public getStations(): Observable <gasStation[]> {
    return this.http.get<gasStation[]>(`${this.apiServerUrl}`);
  }
}
