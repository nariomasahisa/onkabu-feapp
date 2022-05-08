import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookThroughComponent } from './look-through.component';

const routes: Routes = [
  {
    path: '',
    component: LookThroughComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookThroughRoutingModule { }
