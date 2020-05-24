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


  frontSensorFile: File;
  backSensorFile: File;
  upperFootSensorFile: File;
  lowerFootSensorFile: File;

  @Input() toma: Toma;

  message: string = "";
  status: boolean;
  filesExists: boolean = false;

  constructor(
    private tomasService: TomasService
  ) { }

  ngOnInit(): void {

  }

  checkSensor(eventTarget: any, position: number) {

    const file = eventTarget.files[0]

    switch (position) {
      case 0:
        this.frontSensorFile = file;
        break;
      case 1:
        this.backSensorFile = file;
        break;
      case 2:
        this.upperFootSensorFile = file;
        break;
      case 3:
        this.lowerFootSensorFile = file;
    }

    this.filesExists = true;
  }

  uploadFile(){
    if (this.filesExists){
      this.tomasService.uploadSensor(
        this.toma.id,
        this.frontSensorFile,
        this.backSensorFile,
        this.upperFootSensorFile,
        this.lowerFootSensorFile ).subscribe(toma => {
        this.toma = toma;

        this.message = "Archivos subidos correctamente";
        this.status = true;

        this.lowerFootSensorFile = null;
        this.upperFootSensorFile = null;
        this.backSensorFile = null;
        this.frontSensorFile = null;
        this.filesExists = false;

      }, error => {
        this.message = `Ha ocurrido un problema al subir los archivos. ${error.error.message}`;
        this.status = false;
      });
    }
  }

}
