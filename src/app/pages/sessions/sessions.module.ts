import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import {SessionComponent} from './session/session.component';
import {SessionMainComponent} from './session-main/session-main.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TomasModule} from '../tomas/tomas.module';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    SessionComponent,
    SessionMainComponent
  ],
    imports: [
        CommonModule,
        SessionsRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        TomasModule,
        SweetAlert2Module
    ]
})
export class SessionsModule { }
