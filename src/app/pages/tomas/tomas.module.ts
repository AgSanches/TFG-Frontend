import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TomasRoutingModule } from './tomas-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TomaSensorUploadComponent} from './toma-sensor-upload/toma-sensor-upload.component';
import {TomaVideoUploadComponent} from './toma-video-upload/toma-video-upload.component';
import {TomaComponent} from './toma/toma.component';
import {TomaDataComponent} from './toma-data/toma-data.component';
import {TomaFileDescriptionComponent} from './toma-file-description/toma-file-description.component';
import {TomaSensorsComponent} from './toma-sensors/toma-sensors.component';
import {TomaVideosComponent} from './toma-videos/toma-videos.component';
import {ChartsModule} from 'ng2-charts';
import { TomaAnglesComponent } from './toma-angles/toma-angles.component';
import { TomaEditComponent } from './toma-edit/toma-edit.component';

@NgModule({
  declarations: [
    TomaSensorUploadComponent,
    TomaVideoUploadComponent,
    TomaComponent,
    TomaDataComponent,
    TomaFileDescriptionComponent,
    TomaSensorsComponent,
    TomaVideosComponent,
    TomaAnglesComponent,
    TomaEditComponent
  ],
  imports: [
    CommonModule,
    TomasRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  exports: [
    TomaSensorUploadComponent,
    TomaVideoUploadComponent,
  ]
})
export class TomasModule { }
