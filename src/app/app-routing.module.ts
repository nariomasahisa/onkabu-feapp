import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { RoutingComponent } from './components/commons/routing/routing.component';
import { SignUpComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      { path: '', component: MainPageComponent },
      {
        path: 'onkabu',
        loadChildren: () => import('./components/pages/onkabu/onkabu.module')
          .then(m => m.OnkabuModule)
      },
      {
        path: 'calc-value',
        loadChildren: () => import('./components/pages/calc-value/calc-value.module')
          .then(m => m.CalcValueModule)
      },
      {
        path: 'look-through',
        loadChildren: () => import('./components/pages/look-through/look-through.module')
          .then(m => m.LookThroughModule)
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./components/pages/portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
