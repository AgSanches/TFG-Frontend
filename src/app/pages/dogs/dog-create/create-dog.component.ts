import { Component, OnInit } from '@angular/core';
import { Dog } from '../../../models/Dog';
import { DogsService } from '../../../services/dogs.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class DogCreateComponent implements OnInit {

  dog: Dog;

  constructor(
    private dogsService: DogsService,
    private router: Router
  ) {
    this.dog = {
      height: 0, weight: 0, birth: "", gender: "", bread: "", name: ""
    }
  }

  ngOnInit(): void {
  }

  createDog(dog:Dog) {
    this.dogsService.createDog(dog).subscribe(value => {
      if (dog.dogPhoto){
        this.uploadImage(value.id, dog.dogPhoto);
      } else {
        Swal.fire({
          title: "Perro creado",
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
