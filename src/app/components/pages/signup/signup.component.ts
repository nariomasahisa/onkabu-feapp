import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { matStepperAnimations } from '@angular/material/stepper';
import { SignUpService } from '../../../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  forthFormGroup!: FormGroup;
  name :string = '';
  email :string = '';
  password :string = '';
  passwordConfirmation : string = '';

  constructor(
    private _formBuilder: FormBuilder,
    signUpService: SignUpService
    ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
  }
  /**
   * nameSave
   */
  public nameSave() {
    this.name = this.firstFormGroup.value.firstCtrl;
  }
  public emailSave() {
    this.email = this.secondFormGroup.value.secondCtrl;
  }
  public passwordSave() {
    this.password = this.thirdFormGroup.value.thirdCtrl;
  }
  public checkPassword() {
    if (this.forthFormGroup.value.forthCtrl === this.password) {

    }
  }

}
