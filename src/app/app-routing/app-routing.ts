import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DogsComponent} from '../components/dogs/dogs.component';
import {RegisterComponent} from '../components/register/register.component';
import {LoginComponent} from '../components/login/login.component';

const appRoutes: Routes = [
  { path: '', component: DogsComponent},
  { path: 'registrarse', component: RegisterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}
