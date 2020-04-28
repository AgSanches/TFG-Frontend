
import {Component, OnInit, ViewChild} from '@angular/core';
import Swal from 'sweetalert2';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public displayedColumns: string[] =
    ['Nombre', 'Apellido', 'Email', 'Acciones'];

  public dataSource
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir este cambio',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF8282',
      cancelButtonColor: '#91d7c3',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {

        this.userService.deleteUser(id).subscribe(() => {

          const data = this.dataSource._data.value
          this.dataSource = new MatTableDataSource(data.filter((user:User) => user.id != id));

          Swal.fire({
            title: 'Usuario elimnado',
            text: 'El usuario se ha borrado correctamente',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
          });
        }, () => {
          Swal.fire({
            title: 'Ha ocurrido un problema',
            text: 'El usuario no ha podido ser eliminado',
            icon: 'error',
            timer: 4000,
            timerProgressBar: true,
          });
        })
      }
    });
  }

}
