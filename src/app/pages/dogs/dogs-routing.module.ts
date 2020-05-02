import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DogsComponent} from './dogs/dogs.component';
import {DogBaseComponent} from './dog-base/dog-base.component';
import {DogCreateComponent} from './dog-create/create-dog.component';
import {DogComponent} from './dog/dog.component';
import {DogEditComponent} from './dog-edit/dog-edit.component';


const routes: Routes = [
  {path: '', component: DogBaseComponent ,children:
      [
        {path: "", component: DogsComponent},
        {path: "crear", component: DogCreateComponent},
        {path: "dog/:id", component: DogComponent},
        {path: "editar/:id", component: DogEditComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
