import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Plot } from '../models/plot';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  checkStatus(plot: Plot): Observable<boolean> {
    return this.http.head(`http://${plot.host}:${plot.port}/healthCheck`).pipe(map(
      () => true
    ),
    catchError(err => of(false))
    );
  }
}
