import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import {SessionComponent} from './session/session.component';
import {SessionMainComponent} from './session-main/session-main.component';
import {SharedModule} from '../../shared/shared.module';
import {CreateTomaComponent} from './create-toma/create-toma.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TomasModule} from '../tomas/tomas.module';


@NgModule({
  declarations: [
    SessionComponent,
    SessionMainComponent,
    CreateTomaComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TomasModule
  ]
})
export class SessionsModule { }
