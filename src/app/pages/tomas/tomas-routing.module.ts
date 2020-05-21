import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TomaComponent} from './toma/toma.component';
import {TomaEditComponent} from './toma-edit/toma-edit.component';


const routes: Routes = [
  {path: 'toma/:id', component: TomaComponent},
  {path: 'toma/edit/:id', component: TomaEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TomasRoutingModule { }
