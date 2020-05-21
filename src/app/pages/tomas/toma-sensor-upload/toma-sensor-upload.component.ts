import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Toma} from '../../../models/Toma';
import {TomasService} from '../../../services/tomas.service';

@Component({
  selector: 'app-toma-sensor-upload',
  templateUrl: './toma-sensor-upload.component.html',
  styleUrls: ['./toma-sensor-upload.component.scss']
})
export class TomaSensorUploadComponent implements OnInit {


  @Input() toma: Toma;

  message: string = "";
  status: boolean;

  constructor(
    private tomasService: TomasService
  ) { }

  ngOnInit(): void {

  }

  checkSensor(eventTarget: any, position: number) {
    console.log(eventTarget);
  }
}
