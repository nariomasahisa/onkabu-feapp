import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookThroughRoutingModule } from './look-through-routing.module';
import { LookThroughComponent } from './look-through.component';
import { DemoMaterialModule } from '../../../material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LookThroughComponent
  ],
  imports: [
    CommonModule,
    LookThroughRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LookThroughModule { }
