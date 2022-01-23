import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnkabuWebService {

  constructor(
    private http: HttpClient
  ) { }

  public calcOnkabu(buy:number, now:number, stocks:number):Promise<string>{
    const path = 'http://localhost:3000/onkabu'
    return this.http.post<any>(path, {buy, now, stocks}).toPromise();
  }
}
