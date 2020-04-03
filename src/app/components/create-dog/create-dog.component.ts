import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Dog } from '../../models/Dog';
import { DogsService } from '../../services/dogs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class CreateDogComponent implements OnInit {

  showMessage: boolean;
  formStatus: boolean;
  formMessage: string;

  dog: Dog;
  dogPhoto: File = null;

  fileValid: boolean = true;
  fileMessage: string = "";

  allowExtension: Array<string> = ['jpg', 'jpeg', 'png'];
  maxSize: number = 128 * 1024;
  todayDate: string = new Date().toISOString().split("T")[0];

  weightValid: boolean = false;
  heightValid: boolean = false;
  dateValid: boolean = false;

  constructor(
    private location: Location,
    private dogsService: DogsService,
    private router: Router
  ) {
    this.dog = new Dog(0, "", "", "", "",0, 0, "", [], "", "");
  }

  ngOnInit(): void {

  }

  goBack() {
    this.location.back();
  }

  onSubmit(createDog: any) {
    this.dogsService.createDog(this.dog).subscribe(
      response => {

        this.dog = response;

        if (this.dogPhoto){
          this.dogsService.uploadImage(response.id, this.dogPhoto).subscribe(
            response => {
              this.router.navigate(['/caninos']);
            },
            error => {
              this.formStatus = false;
              this.formMessage = error.error.message.file;
              this.showMessage = true;
            });
        } else {
          this.router.navigate(['/caninos']);
        }

      }, error => {
        this.formStatus = false;
        this.formMessage = error.error.message;
        this.showMessage = true;
      });
  }

  checkHeight(){
    this.heightValid = this.dog.height >= 1;
  }

  checkWeight(){
    this.weightValid = this.dog.weight >= 1;
  }

  checkDate(){
    this.dateValid = new Date(this.todayDate) > new Date(this.dog.birth);
  }

  checkFile($event: FileList) {
    let extension = $event[0].name.split('.')[1];

    if(!this.allowExtension.includes(extension)){
      this.fileValid = false;
      this.fileMessage = "La extensión no es correcta, tiene que subir una imagen con extensión jpg, jpeg o png.";
      return
    }

    if($event[0].size > this.maxSize){
      this.fileValid = false;
      this.fileMessage = "El tamaño de la imagen supera el permitido.";
      return
    }

    this.fileValid = true;
    this.dogPhoto = $event.item(0);
  }
}
