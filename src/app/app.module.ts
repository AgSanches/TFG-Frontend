import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app-routing/app-routing';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

import {UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { TomaFileDescriptionComponent } from './components/toma-file-description/toma-file-description.component';
import { TomaSensorUploadComponent } from './components/toma-sensor-upload/toma-sensor-upload.component';
import { TomaVideoUploadComponent } from './components/toma-video-upload/toma-video-upload.component';
import { TomaComponent } from './components/toma/toma.component';
import { TomaVideosComponent } from './components/toma-videos/toma-videos.component';
import { TomaSensorsComponent } from './components/toma-sensors/toma-sensors.component';
import { TomaDataComponent } from './components/toma-data/toma-data.component';
import {ChartsModule} from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
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
    TomaFileDescriptionComponent,
    TomaSensorUploadComponent,
    TomaVideoUploadComponent,
    TomaComponent,
    TomaVideosComponent,
    TomaSensorsComponent,
    TomaDataComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    RouterModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
