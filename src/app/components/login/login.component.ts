import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailUser: string;
  passwordUser: string;
  formStatus: boolean;
  formMessage: string;
  showMessage: boolean;

  constructor(
    private authService: AuthenticationService,
    private location: Location,
    private route: Router,
  ) {

  }

  ngOnInit(): void {
    if(this.authService.getCurrentUser()){
      this.route.navigateByUrl('/');
    }
  }

  onSubmit(loginForm: any) {

    this.authService.login(this.emailUser, this.passwordUser).subscribe(
      () => {
        this.route.navigateByUrl('/');
      }, error => {

        this.showMessage = true;
        this.formStatus = false;

        if (error.status == 401) {
          this.formMessage = error.error.message;
        } else {
          this.formMessage = "Ha ocurrido un problema, vuelva a intentarlo en otro momento."
        }

      }
    );

  }

  goBack() {
    this.location.back();
  }
}
