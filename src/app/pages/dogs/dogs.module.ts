import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import {DogsComponent} from './dogs/dogs.component';
import {DogBoxComponent} from './dog-box/dog-box.component';
import { DogBaseComponent } from './dog-base/dog-base.component';
import {DogCreateComponent} from './dog-create/create-dog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {DogComponent} from './dog/dog.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DogEditComponent } from './dog-edit/dog-edit.component';


@NgModule({
  declarations: [
    DogsComponent,
    DogBoxComponent,
    DogBaseComponent,
    DogCreateComponent,
    DogComponent,
    DogFormComponent,
    DogEditComponent
  ],
  imports: [
    CommonModule,
    DogsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SweetAlert2Module,
  ]
})
export class DogsModule { }
