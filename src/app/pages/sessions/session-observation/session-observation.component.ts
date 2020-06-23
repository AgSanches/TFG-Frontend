import {Component, Input, OnInit} from '@angular/core';
import {SessionsService} from '../../../services/sessions.service';
import {Session} from '../../../models/Session';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-session-observation',
  templateUrl: './session-observation.component.html',
  styleUrls: ['./session-observation.component.scss']
})
export class SessionObservationComponent implements OnInit {

  edit: boolean;
  @Input() session: Session;
  sessionObservationForm: FormGroup;

  constructor(
    private sessionsService: SessionsService
  ) { }

  ngOnInit(): void {
    this.sessionObservationForm = new FormGroup({
      observation: new FormControl(this.session.conclusion_expert, [Validators.required]),
    });
  }

  activateEdit() {
    this.edit = true;
  }

  desactivateEdit() {
    this.edit = false;
  }

  modifyObservation(value: any) {
    this.sessionsService.updateSession(this.session.id, null, value.observation).subscribe(session => {
      this.session = session;
      this.desactivateEdit();
    }, () => {
      Swal.fire({
        title: "No se ha podido actualizar la observación",
        text: "Comprueba que el campo es correcto",
        icon: 'error',
        timer: 1500,
        timerProgressBar: true
      });
    });
  }
}
