import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing/app-routing';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {JwPaginationComponent} from 'jw-angular-pagination';

import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { DogBoxComponent } from './components/dog-box/dog-box.component';
import { FilterComponent } from './components/filter/filter.component';
import { PageSelectionComponent } from './components/page-selection/page-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    RegisterComponent,
    LoginComponent,
    DogBoxComponent,
    FilterComponent,
    PageSelectionComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRouting,
        RouterModule,
        FormsModule,
    ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
