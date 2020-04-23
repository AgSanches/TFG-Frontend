import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user/user.component';

import {DataTablesModule} from 'angular-datatables';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [UserListComponent, UserFormComponent, UserCreateComponent, UserEditComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DataTablesModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

  ]
})
export class UsersModule { }
