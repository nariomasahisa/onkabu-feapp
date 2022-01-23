import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnkabuRoutingModule } from './onkabu-routing.module';
import { OnkabuComponent } from './onkabu.component';
import { DemoMaterialModule } from '../material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OnkabuComponent
  ],
  imports: [
    CommonModule,
    OnkabuRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OnkabuModule { }
