import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from '../../commons/routing/routing.component';
import { ValueResultComponent } from '../value-result/value-result.component';
import { CalcValueComponent } from './calc-value.component';

const routes: Routes = [
  {
    path: '',
    component: CalcValueComponent,
  },
  {
    path: 'value-result',
    component: ValueResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcValueRoutingModule { }
