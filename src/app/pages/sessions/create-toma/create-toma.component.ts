import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TomasService} from '../../../services/tomas.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionsService} from '../../../services/sessions.service';
import {Session} from '../../../models/Session';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import {BehaviorSubject} from 'rxjs';
import {Toma} from '../../../models/Toma';

@Component({
  selector: 'app-create-toma',
  templateUrl: './create-toma.component.html',
  styleUrls: ['./create-toma.component.scss']
})
export class CreateTomaComponent implements OnInit {

  tomaForm: FormGroup;
  session: Session;

  tomaSource: BehaviorSubject<Toma> = new BehaviorSubject<Toma>(null);

  sensorUploaded: boolean = false;
  videosUploaded: boolean = false;

  constructor(
    private tomasService: TomasService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private sessionsService: SessionsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.parent.params.subscribe((params) => {
      this.sessionsService.getSession(params['id']).subscribe(value => {
        this.session = value;
        this.tomaForm = new FormGroup({
          name: new FormControl("", [Validators.required, Validators.maxLength(255)]),
          session_id: new FormControl(params['id']),});
      },
        () => {
        this.location.back();
        Swal.fire({
          title: 'Sesión no existente',
          icon: 'error',
          timer: 1500,
          timerProgressBar: true
        })
      })
    })
  }

  submitForm(toma: Toma){
    if (this.tomaForm.valid){
      this.tomasService.createToma(toma).subscribe(
        value => {
          this.tomaSource.next(value);
      },
        () => {
          Swal.fire({
            title: "No se ha podido crear la toma",
            text: "Vuelva a intentarlo en otro momento",
            icon: 'error',
            timer: 1500,
            timerProgressBar: true
          })
        })
    }
  }

  updateUploads(status: boolean, video: boolean){
    if (video){
      this.videosUploaded = status;
    } else {
      this.sensorUploaded = status;
    }

    if (this.videosUploaded && this.sensorUploaded && this.tomaSource.value){
      this.route.navigate(['/sessions',this.tomaSource.value.session_id]);
    }
  }

  goBack() {
    this.location.back();
  }
}
