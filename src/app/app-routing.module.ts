import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RoutingComponent } from './routing/routing.component';
import { SignUpComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      { path: '', component: MainPageComponent },
      {
        path: 'onkabu',
        loadChildren: () => import('./onkabu/onkabu.module')
          .then(m => m.OnkabuModule)
      },
      {
        path: 'calc-value',
        loadChildren: () => import('./calc-value/calc-value.module')
          .then(m => m.CalcValueModule)
      },
      {
        path: 'look-through',
        loadChildren: () => import('./look-through/look-through.module')
          .then(m => m.LookThroughModule)
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
