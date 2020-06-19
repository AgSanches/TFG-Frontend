import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {SessionComponent} from './session/session.component';
import {SessionMainComponent} from './session-main/session-main.component';

const routes: Routes = [
  {path: ':id', component: SessionComponent, children: [
      {path: '', component: SessionMainComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
