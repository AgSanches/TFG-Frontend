import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
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
    private userService: UserService,
    private location: Location,
    private route: Router,
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {
    this.userService.login(this.emailUser, this.passwordUser).subscribe(
      response => {

        this.showMessage = true;
        this.formStatus = true;
        this.formMessage = "Datos correctos";
        this.userService.log_user( response.name, response.surname, response.access_token, response.refresh_token
        );

        setTimeout(() => {
          this.route.navigateByUrl('/');
        }, 1000)

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
