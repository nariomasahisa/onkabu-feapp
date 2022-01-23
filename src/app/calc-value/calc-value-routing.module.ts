import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoneComponent } from '../none/none.component';
import { RoutingComponent } from '../routing/routing.component';
import { ValueResultComponent } from '../value-result/value-result.component';
import { CalcValueComponent } from './calc-value.component';

const routes: Routes = [
  {
    path: '',
    component: CalcValueComponent,
  },
  {
    path: '',
    component: NoneComponent,
    children: [
      {
        path: 'value-result',
        component: ValueResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcValueRoutingModule { }
