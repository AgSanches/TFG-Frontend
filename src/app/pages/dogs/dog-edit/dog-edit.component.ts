import { Component, OnInit } from '@angular/core';
import {Dog} from '../../../models/Dog';
import {ActivatedRoute, Router} from '@angular/router';
import {DogsService} from '../../../services/dogs.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.component.html',
  styleUrls: ['./dog-edit.component.scss']
})
export class DogEditComponent implements OnInit {

  dog: Dog

  constructor(
    private activatedRoute: ActivatedRoute,
    private dogsService: DogsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.dogsService.getDog(params["id"]).subscribe( value => {
        this.dog = value
      }, () => {

        Swal.fire({
          title: "Canino no existente",
          icon: "error",
          timer: 2500,
          timerProgressBar: true
        });

        this.router.navigate(["/dogs"]);
      })
    })
  }

  updateDog(dog: Dog) {
    dog.id = this.dog.id;
    this.dogsService.updateDog(dog).subscribe(value => {
      if (dog.dogPhoto){
        this.uploadImage(value.id, dog.dogPhoto);
      } else {
        Swal.fire({
          title: "Perro actualizado",
          icon: "success",
          timer: 2500,
          timerProgressBar: true
        });

        this.router.navigate(['/dogs', 'dog', value.id]);
      }
    })
  }

  private uploadImage(id: number, file:File){
    this.dogsService.uploadImage(id, file).subscribe(
      () => {
        this.router.navigate(['/dogs', 'dog', id]);
      },
      error => {
        Swal.fire({
          title: "Ha ocurrido un problema al subir la imagen",
          icon: "error",
          timer: 2500,
          timerProgressBar: true,
          text: error.error.message
        });
      });
  }
}
