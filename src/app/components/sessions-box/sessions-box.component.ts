import {Component, Input, OnInit} from '@angular/core';
import {Session} from '../../models/Session';

@Component({
  selector: 'app-sessions-box',
  host: {'class' : "dogSession"},
  templateUrl: './sessions-box.component.html',
  styleUrls: ['./sessions-box.component.scss']
})
export class SessionsBoxComponent implements OnInit {

  @Input() session: Session;

  constructor() { }

  ngOnInit(): void {
  }

}
