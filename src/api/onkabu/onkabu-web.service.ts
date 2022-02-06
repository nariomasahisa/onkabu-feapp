import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OnkabuWebService {

  constructor(
    private http: HttpClient
  ) { }

  public calcOnkabu(buy:number, now:number, stocks:number):Promise<any>{
    // const path = `${environment.apiUrl}/dev/onkabu`;
    const prodPath = `${environment.apiUrl}/dev/onkabu`
    return this.http.post<any>(prodPath, {buy, now, stocks}).toPromise();
  }
}
