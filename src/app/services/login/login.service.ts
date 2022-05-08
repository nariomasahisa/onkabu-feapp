import { Injectable } from '@angular/core';
import { LoginWebService } from './login-web.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public loginWebService: LoginWebService) { }

  public login(email:string, password:string):Promise<string> {
    return this.loginWebService.login(email, password).then((res)=>{
      console.log(res);
      return res;
    })
  }
}
