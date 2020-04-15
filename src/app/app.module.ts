import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing/app-routing';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { DogBoxComponent } from './components/dog-box/dog-box.component';
import { FilterComponent } from './components/filter/filter.component';
import { PageSelectionComponent } from './components/page-selection/page-selection.component';
import { CreateDogComponent } from './components/create-dog/create-dog.component';
import { DogComponent } from './components/dog/dog.component';
import { DataBoxComponent } from './components/data-box/data-box.component';
import { SessionComponent } from './components/session/session.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { ConclusionBoxComponent } from './components/conclusion-box/conclusion-box.component';
import { ObservationBoxComponent } from './components/observation-box/observation-box.component';
import { SessionMainComponent } from './components/session-main/session-main.component';
import { CreateTomaComponent } from './components/create-toma/create-toma.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    RegisterComponent,
    LoginComponent,
    DogBoxComponent,
    FilterComponent,
    PageSelectionComponent,
    CreateDogComponent,
    DogComponent,
    DataBoxComponent,
    SessionComponent,
    LoadingComponent,
    ErrorComponent,
    ConclusionBoxComponent,
    ObservationBoxComponent,
    SessionMainComponent,
    CreateTomaComponent,

  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRouting,
      RouterModule,
      FormsModule,
      SweetAlert2Module.forRoot()

    ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
