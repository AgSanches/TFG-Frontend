import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TomasService} from '../../services/tomas.service';
import {Toma} from '../../models/Toma';
import Swal from "sweetalert2";
import {Location} from '@angular/common';

@Component({
  selector: 'app-toma',
  templateUrl: './toma.component.html',
  styleUrls: ['./toma.component.scss']
})
export class TomaComponent implements OnInit {

  toma: Toma;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tomasService: TomasService,
    private location: Location,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.tomasService.getToma(value['toma_id']).subscribe(
        toma => {
          this.toma = toma
        },
        error => {
          Swal.fire({
            title: "La toma no existe",
            icon: 'error',
            timer: 1500,
            timerProgressBar: true
          });
          this.route.navigate(['/caninos']);
        }
      )
    })
  }

}
