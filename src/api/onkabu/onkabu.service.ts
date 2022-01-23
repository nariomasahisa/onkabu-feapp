import { Injectable } from '@angular/core';
import { OnkabuWebService } from './onkabu-web.service';

@Injectable({
  providedIn: 'root'
})
export class OnkabuService {

  constructor(
    private onkabuWebService: OnkabuWebService
  ) { }

  public onkabuCalc(buy:number, now:number, stock:number):Promise<string> {
    return this.onkabuWebService.calcOnkabu(buy, now, stock).then((res)=>{
      return res;
    })
  }
}
