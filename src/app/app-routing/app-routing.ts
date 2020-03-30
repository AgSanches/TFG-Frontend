import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DogsComponent} from '../components/dogs/dogs.component';
import {RegisterComponent} from '../components/register/register.component';

const appRoutes: Routes = [
  { path: '', component: DogsComponent},
  { path: 'registrarse', component: RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}
