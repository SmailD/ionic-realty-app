import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { SERVER_URL } from './config';
import { Broker } from '../models/broker';

let brokersURL = SERVER_URL + 'brokers';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private http: HttpClient) { }

  findAll (): Observable<Broker[]> {
    return this.http.get<Broker[]>(brokersURL)
      .pipe(
        tap(_ => console.log('fetched brokers')),
        catchError(this.handleError('findAll', []))
      );
  }

  findById(id: number): Observable<Broker> {
    const url = `${brokersURL}/${id}`;
    return this.http.get<Broker>(url).pipe(
      tap(_ => console.log(`fetched borker id=${id}`)),
      catchError(this.handleError<any>(`findById id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
