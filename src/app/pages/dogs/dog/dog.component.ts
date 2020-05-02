import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DogsService} from '../../../services/dogs.service';
import {Dog} from '../../../models/Dog';
import {url} from '../../../services/variables';
import {BehaviorSubject, Observable} from 'rxjs';
import {Session} from '../../../models/Session';
import {SessionsService} from '../../../services/sessions.service';
import {SortService} from '../../../services/sort.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  dog: Dog;
  sessionSource: BehaviorSubject<Session[]>;
  sessionObservable: Observable<Session[]>;
  sessions: Array<Session>;

  limit: number;
  isSearching: boolean;

  asc: boolean;
  date: boolean;

  swalCreateSession = {
    title: 'Elige un nombre',
    input: 'text',
    inputAttributes: {
      placeholder: 'Nombre'
    },
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonColor: '#FF8282',
    confirmButtonText: 'Crear',
    confirmButtonColor: '#91d7c3',
  }

  swal = {
    title: '¿Estás seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#FF8282',
    cancelButtonColor: '#91d7c3',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dogsService: DogsService,
    private sessionsService: SessionsService,
    private sortService: SortService
  ) {
    this.sessionSource = new BehaviorSubject<Session[]>([]);
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
      }, () => {
          Swal.fire({
            title: "Canino no existente",
            icon: "error",
            timer: 2500,
            timerProgressBar: true
          });
          this.router.navigate(["/dogs"]);
      });
    });

    this.sessionObservable.subscribe(sessions => {
      this.sessions = sessions.slice(0, this.limit);
      this.isSearching = false;
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
      this.sessionsService.getSessionsByName(this.dog.id, $event).subscribe(sessions => {
          this.sessionSource.next(sessions);
          this.isSearching = false;
      });

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

  deleteDog() {
    this.dogsService.deleteDog(this.dog.id).subscribe(() => {

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Perro eliminado correctamente',
        timer: 1500,
        timerProgressBar: true
      });

      this.router.navigate(['/dogs'])
    },() => {

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ha ocurrido un error, vuelva a intentarlo en otro momento.',
        timer: 1500,
        timerProgressBar: true
      });
    })
  }

  createSession(name: string) {
    this.sessionsService.createSession(this.dog.id, name).subscribe(value => {
      const newArray: Session[] = this.sessionSource.getValue();
      newArray.push(value);
      this.sessionSource.next(newArray);
    });
  }
}
