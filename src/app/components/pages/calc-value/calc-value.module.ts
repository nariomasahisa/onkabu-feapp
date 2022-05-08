import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcValueRoutingModule } from './calc-value-routing.module';
import { DemoMaterialModule } from "../../../material-modules";

import { CalcValueComponent } from './calc-value.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadExcelComponent } from '../../commons/load-excel/load-excel.component';


@NgModule({
  declarations: [
    CalcValueComponent,
  ],
  imports: [
    CommonModule,
    CalcValueRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CalcValueModule { }
