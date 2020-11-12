import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Plot, Channel } from '../models/plot';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private plot: Plot;

  constructor(private http: HttpClient) { 
    this.plot = new Plot(1, '192.168.18.122', 80);
    this.plot.channels = [
      new Channel(1, 'Parcela Norte (P1)'),
      new Channel(2, 'Parcela Este (P2)'),
      new Channel(3, 'Parcela Sur (P3)')
    ];
  }

  checkStatus(plot: Plot): Observable<boolean> {
    return this.http.head(`http://${plot.host}:${plot.port}/healthCheck`).pipe(map(
      () => true
    ),
    catchError(err => of(false)));
  }

  getPlot(): Plot {
    return this.plot;
  }

  toggleIrrigation(plot: Plot, channel: Channel): Observable<boolean> {
    return this.http.get(`http://${plot.host}:${plot.port}/irrigation/${channel.id}`).pipe(map(
      () => true
    ),
    catchError(err => of(false)));

  }

  toggleFertilizer(plot: Plot, channel: Channel): Observable<boolean> {
    return this.http.get(`http://${plot.host}:${plot.port}/fertilizer/${channel.id}`).pipe(map(
      () => true
    ),
    catchError(err => of(false)));
  }
}
