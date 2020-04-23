import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {DogsComponent} from '../components/dogs/dogs.component';
import {LoginComponent} from '../components/login/login.component';
import {CreateDogComponent} from '../components/create-dog/create-dog.component';
import {DogComponent} from '../components/dog/dog.component';
import {SessionComponent} from '../components/session/session.component';
import {SessionMainComponent} from '../components/session-main/session-main.component';
import {CreateTomaComponent} from '../components/create-toma/create-toma.component';
import {TomaComponent} from '../components/toma/toma.component';

const appRoutes: Routes = [
  { path: 'caninos', component: DogsComponent},
  { path: 'caninos/crear', component: CreateDogComponent },
  { path: 'canino/:id', component: DogComponent },
  { path: 'session/:id', component: SessionComponent, children: [
      {path: '', component: SessionMainComponent},
      {path: 'create-toma', component: CreateTomaComponent},
      {path: 'toma/:toma_id', component: TomaComponent},
    ] },
  { path: 'login', component: LoginComponent},
  { path: 'users', loadChildren: () => import('../pages/users/users.module').then(m => m.UsersModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}
