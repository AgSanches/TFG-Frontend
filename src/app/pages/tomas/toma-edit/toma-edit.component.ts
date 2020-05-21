import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Session} from '../../../models/Session';
import {Toma} from '../../../models/Toma';
import {TomasService} from '../../../services/tomas.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionsService} from '../../../services/sessions.service';
import {Location} from '@angular/common';
import Swal from "sweetalert2";

@Component({
  selector: 'app-toma-edit',
  templateUrl: './toma-edit.component.html',
  styleUrls: ['./toma-edit.component.scss']
})
export class TomaEditComponent implements OnInit {

  tomaForm: FormGroup;
  session: Session;
  toma: Toma;

  constructor(
    private tomasService: TomasService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private sessionsService: SessionsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.tomasService.getToma(params['id']).subscribe(toma => {
        this.toma = toma;

        this.tomaForm = new FormGroup({
            name: new FormControl(toma.name, [Validators.required]),
            session_id: new FormControl(toma.id),
        });


      });
    });
  }

  submitForm(toma: Toma){
    if (this.tomaForm.valid){
      this.toma.name = toma.name;
      this.tomasService.updateToma(this.toma).subscribe(() => {
        this.route.navigate([]);
      },() => {
        Swal.fire({
          title: "No se ha podido actualizar la toma",
          text: "Comprueba que todos los campos son correctos",
          icon: 'error',
          timer: 1500,
          timerProgressBar: true
        })
      })
    }
  }

  goBack() {
    this.location.back();
  }

}
