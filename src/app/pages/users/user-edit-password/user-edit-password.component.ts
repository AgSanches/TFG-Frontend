import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import Swal from "sweetalert2";
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-edit-password',
  templateUrl: './user-edit-password.component.html',
  styleUrls: ['./user-edit-password.component.scss']
})
export class UserEditPasswordComponent implements OnInit {

  @Input() user: User;
  confirm_password: string = "";

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  updatePassword(passwordForm: NgForm) {
    if (passwordForm.form.status == "VALID"){
      this.userService.updatePassword(this.user).subscribe( () => {
        Swal.fire({
          title: "Contraseña actualizada",
          icon: "success",
          timerProgressBar: true,
          timer: 2000
        });
        passwordForm.reset()
      }, error => {
        this.showSwalError(error.error.message)
      });
    }
  }

  showSwalError(message: string = "Ha ocurrido un error, vuelva a intentarlo en otro momento"){
    Swal.fire({
      title: "Error",
      text: message,
      icon: "error",
      timerProgressBar: true,
      timer: 2000
    });
  }
}
