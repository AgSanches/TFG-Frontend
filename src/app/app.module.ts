import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing/app-routing';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    RegisterComponent,
    LoginComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRouting,
        RouterModule,
        FormsModule
    ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
