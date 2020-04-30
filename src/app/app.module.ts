import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app-routing/app-routing';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {UserService} from './services/user.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {JwtModule} from '@auth0/angular-jwt';
import {jwtConfig} from './jwtconfig';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    RouterModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    JwtModule.forRoot({
      config: jwtConfig
    })

  ],
  providers: [
    UserService
  ],
  exports: [],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule { }
