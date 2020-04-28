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

  @Input() toma: Observable<Toma>;
  @Output() fileEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  message: string = "";
  status: boolean;

  constructor(
    private tomasService: TomasService
  ) { }

  ngOnInit(): void {
    this.toma.subscribe(value => {
      if (value && this.frontSensorFile || this.backSensorFile){
        this.tomasService.uploadSensor(value.id, this.frontSensorFile, this.backSensorFile).subscribe(
          () => {
          this.message = "Archivos de los sensores subidos correctamente.";
          this.status = true;
            this.fileEmitter.emit(true);
        }, () => {
          this.message = "Ha ocurrido un problema en la subida de los sensores.";
          this.status = false;
            this.fileEmitter.emit(false);
        })
      }else {
        this.fileEmitter.emit(true);
      }
    })
  }

  checkSensor(file: FileList, front: boolean) {
    if (front){
      this.frontSensorFile = file[0];
    } else {
      this.backSensorFile = file[0];
    }
  }
}
