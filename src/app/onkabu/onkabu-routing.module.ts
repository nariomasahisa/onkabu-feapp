import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnkabuComponent } from './onkabu.component';

const routes: Routes = [
  {
    path: '',
    component: OnkabuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnkabuRoutingModule { }
