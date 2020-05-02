import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dog} from '../../../models/Dog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {DogsService} from '../../../services/dogs.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {

  @Output() dogEmitter: EventEmitter<Dog> = new EventEmitter<Dog>();

  @Input() dog: Dog;

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
      name: new FormControl(this.dog.name, [Validators.required, Validators.maxLength(255)]),
      bread: new FormControl(this.dog.bread, [Validators.required, Validators.maxLength(255)]),
      gender: new FormControl(this.dog.gender, [Validators.required]),
      birth: new FormControl("",[Validators.required]),
      weight: new FormControl(this.dog.weight,[Validators.required]),
      height: new FormControl(this.dog.height,[Validators.required]),
      image: new FormControl(""),
    });
  }

  onSubmit(dog: Dog) {
    if (this.dogForm.valid && this.fileValid && this.dateValid ) {
      dog.dogPhoto = this.dogPhoto;
      this.dogEmitter.emit(dog);
    }
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
