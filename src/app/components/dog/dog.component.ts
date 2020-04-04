import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DogsService} from '../../services/dogs.service';
import {Dog} from '../../models/Dog';
import {url} from '../../services/variables';
import {BehaviorSubject, Observable} from 'rxjs';
import {Session} from '../../models/Session';
import {SessionsService} from '../../services/sessions.service';
import {SortService} from '../../services/sort.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  dog: Dog;
  sessionSource: BehaviorSubject<Array<Session>>;
  sessionObservable: Observable<Array<Session>>;
  sessions: Array<Session>;

  limit: number;
  isSearching: boolean;

  asc: boolean;
  date: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dogsService: DogsService,
    private sessionsService: SessionsService,
    private sortService: SortService
  ) {
    this.sessionSource = new BehaviorSubject<Array<Session>>([]);
    this.sessionObservable = this.sessionSource.asObservable();
    this.sessions = this.sessionSource.value;
    this.limit = 5;
    this.isSearching = true;
  }

  ngOnInit(): void {

    this.isSearching = true;

    this.activatedRoute.params.subscribe(params => {
      this.dogsService.getDog(params['id']).subscribe(dog => {
        this.dog = dog;
        this.getAllSessions();
      });
    });


    this.sessionObservable.subscribe(sessions => {
      this.sessions = sessions.slice(0, this.limit);
      this.isSearching = false;
      console.log(sessions);
    })

  }

  getAllSessions(){
    this.sessionsService.getSessions(this.dog.id).subscribe(sessions => {
      this.sessionSource.next(sessions);
      this.isSearching = false;
    });
  }

  getDogImage() {
    return url + "/dog/image/" + this.dog.id;
  }

  searchSession($event: string) {

    this.isSearching = true;

    if($event.length < 1){
      this.getAllSessions();
    } else {
      this.sessionsService.getSessionsByName(this.dog.id, $event,
        this.date?'updated_at':'name', this.asc?'asc':'desc' ).subscribe(sessions => {
          this.sessionSource.next(sessions);
          this.isSearching = false;
      }, error => {
          //TODO Mensaje error
      })

    }
  }

  sortSessions($event: Array<any>) {
    this.date = $event[0];
    this.asc = $event[1];
    let data = this.sortService.sort(this.sessionSource.value, this.date, this.asc);
    this.sessionSource.next(data);
  }

  sliceSessions($event: Array<Session>) {
    this.sessions = $event;
  }
}