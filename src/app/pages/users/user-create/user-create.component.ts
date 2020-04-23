import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../../../models/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: User;
  confirm_password: string;
  showMessage: boolean;
  formMessage: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private location: Location
  ) {

    this.user = {
      name: "",
      surname: "",
      password: "",
      email: ""
    };
  }

  ngOnInit(): void {
  }

  createUser(registerForm: any) {
    if(registerForm.form.status == 'VALID'){
      this.userService.register(this.user).subscribe(
        () => {
          this.router.navigate(["/users"])
        },
        error => {
          this.showMessage = true;
          this.formMessage = error.error.message;
        }
      );
    }
  }

  goBack() {
    this.location.back();
  }
}
