import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {SessionComponent} from './session/session.component';
import {SessionMainComponent} from './session-main/session-main.component';
import {CreateTomaComponent} from './create-toma/create-toma.component';

const routes: Routes = [
  {path: ':id', component: SessionComponent, children: [
      {path: '', component: SessionMainComponent},
      {path: 'crear-toma', component: CreateTomaComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
