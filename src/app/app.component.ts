import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  title = 'Inicio';
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((user:User) => {
      this.currentUser = user;
    })
  }

  logout() {
    this.authenticationService.logout();
  }
}
