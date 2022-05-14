import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioCreateComponent } from './portfolio-create/portfolio-create.component';
import { PortfolioEditComponent } from './portfolio-edit/portfolio-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
  },
  {
    path: 'create',
    component: PortfolioCreateComponent
  },
  {
    path: 'edit',
    component: PortfolioEditComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
