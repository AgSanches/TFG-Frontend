import { Component, OnInit } from '@angular/core';
import {Dog} from '../../models/Dog';
import {DogsService} from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs: Array<Dog>;

  constructor(
    private dogsService: DogsService
  ) { }

  ngOnInit(): void {
    this.dogsService.getDogs().subscribe(
      data => {
      this.dogs = data;
    }, error => {

      })
  }

}
