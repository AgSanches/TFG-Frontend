import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TomaComponent} from './toma/toma.component';


const routes: Routes = [
  {path: 'toma/:id', component: TomaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TomasRoutingModule { }
