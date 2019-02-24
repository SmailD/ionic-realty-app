import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SERVER_URL } from './config';

let surveyURL = SERVER_URL + 'survey';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  addSurvey(survey) {
    let body = JSON.stringify(survey);
    return this.http.post(surveyURL, body, httpOptions)
      .pipe(
        tap(_ => console.log('survey submitted')),
        catchError(this.handleError<any>('addSurvey'))
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
