import {Component, Input, OnInit} from '@angular/core';
import {Toma} from '../../../models/Toma';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TomasService} from '../../../services/tomas.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-toma-observation',
  templateUrl: './toma-observation.component.html',
  styleUrls: ['./toma-observation.component.scss']
})
export class TomaObservationComponent implements OnInit {

  @Input() toma: Toma;
  edit: boolean;
  tomaObservationForm: FormGroup;


  constructor(
    private tomasService: TomasService
  ) {}

  ngOnInit(): void {
    this.tomaObservationForm = new FormGroup({
      observation: new FormControl(this.toma.conclusion_expert, [Validators.required]),
    });
  }

  activateEdit() {
    this.edit = true
  }

  modifyObservation(value: any) {
    this.tomasService.updateToma(this.toma.id, null, value.observation).subscribe(toma => {
      this.toma = toma;
      this.desactivateEdit();
    }, () => {
      Swal.fire({
        title: "No se ha podido actualizar la observación",
        text: "Comprueba que el campo es correcto",
        icon: 'error',
        timer: 1500,
        timerProgressBar: true
      });
    })
  }

  desactivateEdit() {
    this.edit = false;
  }
}
