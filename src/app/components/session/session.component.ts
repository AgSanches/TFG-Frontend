import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SessionsService} from '../../services/sessions.service';
import {BehaviorSubject} from 'rxjs';
import {Session} from '../../models/Session';
import {SortService} from '../../services/sort.service';
import {Toma} from '../../models/Toma';
import {TomasService} from '../../services/tomas.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  tomaSource: BehaviorSubject<Toma[]>;

  tomas: Toma[];
  session: Session;

  limit: number = 5;

  date: boolean;
  asc: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sessionsService: SessionsService,
    private router: Router,
    private sortService: SortService,
    private tomasService: TomasService
  ) {
    this.tomaSource = new BehaviorSubject<Toma[]>([]);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.sessionsService.getSession(params['id']).subscribe(value => {
        this.tomaSource.next(value.tomas);
        this.session = value;
      }, () => {
        this.router.navigate(['']);
      } );
    });

    this.tomaSource.asObservable().subscribe(value => {
      this.tomas = value.slice(0, this.limit);
    })

  }

  searchTomas($event: string) {
    if ($event.length > 0) {
      this.tomasService.getTomasByName(this.session.id, $event).subscribe(value => {
        this.tomaSource.next(value);
      });
    } else {
      this.tomaSource.next(this.session.tomas);
    }

  }

  sortTomas($event: Array<any>) {
    this.date = $event[0];
    this.asc = $event[1];
    let data = this.sortService.sort(this.tomaSource.value, this.date, this.asc);
    this.tomaSource.next(data);
  }

  sliceTomas(tomas: Array<Toma>) {
    this.tomas = tomas;
  }
}
