  import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
import { User } from "../../../models/user";
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ])
  public debug(): void {
    console.log(this.emailFormControl.value);
  }

  public onSubmit(): void {
    let email = this.emailFormControl.value;
    let password = this.passwordFormControl.value;
    this.loginService.login(email, password);
  }
}
