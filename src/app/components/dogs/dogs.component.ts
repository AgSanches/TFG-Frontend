import { Component, OnInit } from '@angular/core';
import {Dog} from '../../models/Dog';
import {DogsService} from '../../services/dogs.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../models/User';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogsSource: BehaviorSubject<Array<Dog>>;
  dogsObservable: Observable<Array<Dog>>;
  dogs: Array<Dog>;
  limit: number;
  isSearching: boolean;

  constructor(
    private dogsService: DogsService
  ) {
    this.dogsSource = new BehaviorSubject<Array<Dog>>([]);
    this.dogsObservable = this.dogsSource.asObservable();
    this.limit = 16;
    this.isSearching = true;
  }

  ngOnInit(): void {
    this.getAllDogs();

    this.dogsObservable.subscribe(data => {
      this.dogs = data.slice(0,this.limit);
      this.isSearching = false;
    });

  }

  getAllDogs(){
    this.isSearching = true;
    this.dogsService.getDogs().subscribe(
      data => {
        this.dogsSource.next(data);
      }, error => {
        console.log("Problemas");
      });
  }

  searchDogs($event: string) {

    this.isSearching = true;

    if($event.length < 1){

      this.getAllDogs();

    } else {

      this.dogsService.getDogsByName($event).subscribe(
        data => {
          this.dogsSource.next(data);
        }, error => {
          console.log(error)
        });
    }
  }

  sliceDogs($event: Array<Dog>) {
    this.dogs = $event;
  }
}
