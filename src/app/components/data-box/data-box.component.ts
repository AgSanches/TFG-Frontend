import {Component, Input, OnInit} from '@angular/core';
import {Session} from '../../models/Session';
import {Toma} from '../../models/Toma';

@Component({
  selector: 'app-data-box',
  host: {'class' : "dogSession"},
  templateUrl: './data-box.component.html',
  styleUrls: ['./data-box.component.scss']
})
export class DataBoxComponent implements OnInit {

  @Input() input: Session | Toma;
  @Input() routerTarget: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
