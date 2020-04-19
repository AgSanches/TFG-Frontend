import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import { UserService } from '../../services/user.service';
import { Location } from '@angular/common';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  confirm_password: string;
  formStatus: boolean;
  formMessage: string;
  showMessage: boolean;

  constructor(
    private userService: UserService,
    private location: Location,
    private authenticationService: AuthenticationService,
    private route:Router
  ) {
    this.user = new User("", "", "", "", "", "");
  }

  ngOnInit(): void {
    if(this.authenticationService.getCurrentUser()){
      this.route.navigateByUrl('/');
    }
  }

  onSubmit(registerForm: any) {
    if(registerForm.form.status == 'VALID'){
      this.userService.register(this.user).subscribe(
        response => {
          this.showMessage = true;
          this.formStatus = true;
          this.formMessage = response.message;
        },
        error => {
          this.showMessage = true;
          this.formStatus = false;
          this.formMessage = error.error.message;
        }
      );
    }
  }

  goBack() {
    this.location.back();
  }
}
