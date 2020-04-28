import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from '../components/login/login.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'users', loadChildren: () => import('../pages/users/users.module').then(m => m.UsersModule)},
  { path: 'dogs', loadChildren: () => import('../pages/dogs/dogs.module').then(m => m.DogsModule)},
  { path: 'sessions', loadChildren: () => import('../pages/sessions/sessions.module').then(m => m.SessionsModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}
