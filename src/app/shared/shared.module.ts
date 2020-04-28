import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingComponent} from './loading/loading.component';
import {ErrorComponent} from './error/error.component';
import {FilterComponent} from './filter/filter.component';
import {PageSelectionComponent} from './page-selection/page-selection.component';
import {DataBoxComponent} from './data-box/data-box.component';
import {ConclusionBoxComponent} from './conclusion-box/conclusion-box.component';
import {ObservationBoxComponent} from './observation-box/observation-box.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LoadingComponent,
    ErrorComponent,
    FilterComponent,
    PageSelectionComponent,
    DataBoxComponent,
    ConclusionBoxComponent,
    ObservationBoxComponent,
  ],
  exports: [
    LoadingComponent,
    ErrorComponent,
    FilterComponent,
    PageSelectionComponent,
    DataBoxComponent,
    ConclusionBoxComponent,
    ObservationBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
