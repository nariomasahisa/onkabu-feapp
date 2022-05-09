import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { djangoLocalPath } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PortfolioWebService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * getOnkabu
   */
  public getOnkabu():Observable<any> {
    const path = `${djangoLocalPath.apiUrl}/onkabu`;
    return this.http.get<any>(path)
  }
}
