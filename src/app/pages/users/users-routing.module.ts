import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserEditComponent} from './user-edit/user-edit.component';


const routes: Routes = [
  {path: '', component: UserComponent, children: [
      {path: '', component: UserListComponent},
      {path: 'create', component: UserCreateComponent},
      {path: 'edit/:id', component: UserEditComponent},
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
