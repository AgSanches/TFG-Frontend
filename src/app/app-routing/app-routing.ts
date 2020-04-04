import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DogsComponent} from '../components/dogs/dogs.component';
import {RegisterComponent} from '../components/register/register.component';
import {LoginComponent} from '../components/login/login.component';
import {CreateDogComponent} from '../components/create-dog/create-dog.component';
import {DogComponent} from '../components/dog/dog.component';

const appRoutes: Routes = [
  { path: 'caninos', component: DogsComponent},
  { path: 'caninos/crear', component: CreateDogComponent },
  { path: 'canino/:id', component: DogComponent },
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
