import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, ObservedValueOf, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { IUser } from '../../voes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginWebService {

  public loginUrl = 'http://localhost:3000/login'
  public user!: Observable<IUser>
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {

  }


  login(email: string, password: string) {
    return this.http.post<any>(this.loginUrl, {email, password}).toPromise()
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred', error.error);
    } else {
      console.error(`Backend returned code ${error.status} ,body was: `, error.error)
    }
    return throwError('なんかおかしい');
  }
}
