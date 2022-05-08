import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { DemoMaterialModule } from '../../../material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioCreateComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PortfolioModule { }
