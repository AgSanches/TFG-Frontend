import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CheckLoginGuard} from '../guards/check-login.guard';

import {LoginComponent} from '../components/login/login.component';
import {CheckAdminGuard} from '../guards/check-admin.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'users', canActivate: [CheckAdminGuard], loadChildren: () => import('../pages/users/users.module').then(m => m.UsersModule)},
  { path: 'dogs', canActivate: [CheckLoginGuard] ,loadChildren: () => import('../pages/dogs/dogs.module').then(m => m.DogsModule)},
  { path: 'sessions', canActivate: [CheckLoginGuard], loadChildren: () => import('../pages/sessions/sessions.module').then(m => m.SessionsModule)},
  { path: 'tomas', loadChildren: () => import('../pages/tomas/tomas.module').then(m => m.TomasModule)},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ]
})

export class AppRouting {}
