import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params['id']).subscribe(user => {
        this.user = user;
      }, () => {
        this.location.back();
      })
    })
  }

  updateUser(editForm: NgForm) {
    if (editForm.form.status == "VALID"){
      this.userService.updateUser(this.user).subscribe( user => {
        this.user = user;
        Swal.fire({
          title: "Usuario actualizado",
          icon: "success",
          timerProgressBar: true,
          timer: 2000
        })
      }, error => {
        this.showSwalError(error.error.message)
      });
    } else {
      this.showSwalError()
    }
  }

  showSwalError(message: string = "El formulario no es válido"){
    Swal.fire({
      title: "Error",
      text: message,
      icon: "error",
      timerProgressBar: true,
      timer: 2000
    });
  }

  goBack(){
    this.location.back()
  }
}
