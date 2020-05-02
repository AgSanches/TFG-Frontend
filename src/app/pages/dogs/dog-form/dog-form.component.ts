import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Dog} from '../../../models/Dog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss']
})
export class DogFormComponent implements OnInit {

  @Output() dogEmitter: EventEmitter<Dog> = new EventEmitter<Dog>();
  @Input() title: string = "Crear Canino";
  @Input() dog: Dog;

  dogForm: FormGroup;
  dogPhoto: File = null;

  fileValid: boolean = true;
  fileMessage: string = "";

  maxSize: number = 128 * 1024;

  maxDate;
  startDate;


  constructor(
    private location: Location
  ) {}

  ngOnInit(): void {

    this.dogForm = new FormGroup({
      name: new FormControl(this.dog.name, [Validators.required, Validators.maxLength(255)]),
      bread: new FormControl(this.dog.bread, [Validators.required, Validators.maxLength(255)]),
      gender: new FormControl(this.dog.gender, [Validators.required]),
      birth: new FormControl(this.dog.birth, [Validators.required]),
      weight: new FormControl(this.dog.weight,[Validators.required]),
      height: new FormControl(this.dog.height,[Validators.required]),
      image: new FormControl(""),
    });

    this.maxDate = this.fromDateToDatepicker(new Date());
    this.startDate = this.dog.birth ? this.fromDateToDatepicker(new Date(this.dog.birth)):this.fromDateToDatepicker(new Date());
  }

  fromDateToDatepicker(date: Date){
    const parseDate = date.toISOString().split("T")[0].split("-");
    return {
      year: parseInt(parseDate[0]),
      month: parseInt(parseDate[1]),
      day: parseInt(parseDate[2]) + 1,
    }
  }

  toModel(date: NgbDateStruct){
    return `${date.year}/${date.month}/${date.day}`
  }

  onSubmit(dog: Dog) {
    if (this.dogForm.valid && this.fileValid) {
      dog.dogPhoto = this.dogPhoto;
      dog.birth = this.toModel(this.startDate)
      this.dogEmitter.emit(dog);
    }
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
