import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcValueRoutingModule } from './calc-value-routing.module';
import { DemoMaterialModule } from "../material-modules";

import { CalcValueComponent } from './calc-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalcValueComponent
  ],
  imports: [
    CommonModule,
    CalcValueRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CalcValueModule { }
