import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SERVER_URL } from './config';
import { Property } from '../models/property';

let favorites = [],
    propertiesURL = SERVER_URL + 'properties',
    favoritesURL = propertiesURL + '/favorites/',
    likesURL = propertiesURL + '/likes/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  findAll (): Observable<Property[]> {
    return this.http.get<Property[]>(propertiesURL)
      .pipe(
        tap(_ => console.log('fetched properties')),
        catchError(this.handleError('findAll', []))
      );
  }

  findById(id: number): Observable<Property> {
    const url = `${propertiesURL}/${id}`;
    return this.http.get<Property>(url).pipe(
      tap(_ => console.log(`fetched property id=${id}`)),
      catchError(this.handleError<any>(`findById id=${id}`))
    );
  }

  getFavorites() {
    return this.http.get<Property[]>(favoritesURL)
      .pipe(
        tap(_ => console.log('fetched favorites')),
        catchError(this.handleError('getFavorites', []))
      );
  }

  like(property) {
    let body = JSON.stringify(property);
    return this.http.post(likesURL, body, httpOptions)
      .pipe(
        tap(_ => console.log('add like to property')),
        catchError(this.handleError<any>('like'))
      )
  }

  favorite(property) {
    let body = JSON.stringify(property);
    return this.http.post(favoritesURL, body, httpOptions)
      .pipe(
        tap(_ => console.log('add property to list of favorites')),
        catchError(this.handleError<any>('favorite'))
      )
  }

  unfavorite(property) {
    return this.http.delete(favoritesURL + property.id)
      .pipe(
        tap(_ => console.log('remove property from list of favorites')),
        catchError(this.handleError<any>('unfavorite'))
      )
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
