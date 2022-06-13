import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CalcValueRequest, CalcValueResponse } from 'src/app/components/pages/calc-value/voes/value';

@Injectable({
  providedIn: 'root'
})
export class CalcValueService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8000/calc-value/'
  

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      console.error('An Error occurred: ', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was:`, error.error  
      )
    }
    return throwError(() => new Error('Something bad happened ; please try again later.'));    
  }
  
  public calcValue(request: CalcValueRequest):Observable<CalcValueResponse> {
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      })
    }
    return this.http.post<CalcValueResponse>(this.url, request, httpOptions)
      .pipe(
        catchError(this.handleError)
      )
      // .subscribe({
      //   next(res: )
      // })
  }
}
