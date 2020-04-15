import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Dog } from '../../models/Dog';
import { DogsService } from '../../services/dogs.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class CreateDogComponent implements OnInit {

  showMessage: boolean;
  formStatus: boolean;
  formMessage: string;

  dogForm: FormGroup;
  dogPhoto: File = null;

  fileValid: boolean = true;
  fileMessage: string = "";

  maxSize: number = 128 * 1024;
  todayDate: string = new Date().toISOString().split("T")[0];

  dateValid: boolean = false;

  constructor(
    private location: Location,
    private dogsService: DogsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dogForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.maxLength(255)]),
      bread: new FormControl("", [Validators.required, Validators.maxLength(255)]),
      gender: new FormControl("", [Validators.required]),
      birth: new FormControl("",[Validators.required]),
      weight: new FormControl(0,[Validators.required]),
      height: new FormControl(0,[Validators.required]),
      image: new FormControl(""),
    });
  }

  onSubmit(dog: Dog) {
    if (this.dogForm.valid && this.fileValid && this.dateValid ) {
      this.dogsService.createDog(dog).subscribe(
        response => {

          if (this.dogPhoto){
            this.uploadImage(response.id)
          } else {
            this.router.navigate(['/caninos']);
          }

        },
        error => {
          this.formStatus = false;
          this.formMessage = error.error.message;
          this.showMessage = true;
        });
    }
  }

  private uploadImage(id: number){
    this.dogsService.uploadImage(id, this.dogPhoto).subscribe(
      response => {
        this.router.navigate(['/caninos']);
      },
      error => {
        this.formStatus = false;
        this.formMessage = error.error.message.file;
        this.showMessage = true;
      });
  }

  checkDate(){
    this.dateValid = new Date(this.todayDate) > new Date(this.dogForm.value.birth);
  }

  checkFile($event: FileList) {

    if($event[0].size > this.maxSize){
      this.fileValid = false;
      this.fileMessage = "El tamaño de la imagen supera el permitido.";
      return
    }

    this.fileValid = true;
    this.dogPhoto = $event.item(0);
  }

  goBack() {
    this.location.back();
  }
}
