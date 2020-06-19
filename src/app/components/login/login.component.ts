import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
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
    private route: Router,
  ) {

  }

  ngOnInit(): void {
    if(this.authService.getCurrentUser()){
      this.route.navigateByUrl('/dogs');
    }
  }

  onSubmit(loginForm: any) {

    this.authService.login(this.emailUser, this.passwordUser).subscribe(
      () => {
        this.route.navigateByUrl('/dogs');
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
}
