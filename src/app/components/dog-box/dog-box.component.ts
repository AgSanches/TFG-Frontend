import { Component, OnInit, Input } from '@angular/core';
import {Dog} from '../../models/Dog';
import {DogsService} from '../../services/dogs.service';
import {url} from '../../services/variables';

@Component({
  selector: 'app-dog-box',
  templateUrl: './dog-box.component.html',
  styleUrls: ['./dog-box.component.scss']
})
export class DogBoxComponent implements OnInit {

  @Input() dog: Dog;

  constructor(
    private dogsService: DogsService
  ) {

  }

  ngOnInit(): void {
  }

  getDogImage() {
    return url + "/dog/image/" + this.dog.id;
  }

}
