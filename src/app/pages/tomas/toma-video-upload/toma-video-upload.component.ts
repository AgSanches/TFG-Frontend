import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Toma} from '../../../models/Toma';
import {TomasService} from '../../../services/tomas.service';

@Component({
  selector: 'app-toma-video-upload',
  templateUrl: './toma-video-upload.component.html',
  styleUrls: ['./toma-video-upload.component.scss']
})
export class TomaVideoUploadComponent implements OnInit {


  @Input() toma: Toma;

  frontVideo: File;
  middleVideo: File;
  backVideo: File;

  message: string = "";
  status: boolean;
  filesExists: boolean = false;

  constructor(
    private tomasService: TomasService
  ) { }

  ngOnInit(): void {

  }

  checkVideo(target: any, position: number = 1){
    const file = target.files[0]

    switch (position) {
      case 1:
        this.frontVideo = file;
        break;
      case 2:
        this.middleVideo = file;
        break;
      case 3:
        this.backVideo = file;
    }

    this.filesExists = true;
  }

  uploadFile(){
    if (this.filesExists){
      this.tomasService.uploadVideo(
        this.toma.id,
        this.frontVideo,
        this.middleVideo,
        this.backVideo).subscribe(toma => {
        this.toma = toma;

        this.message = "Archivos subidos correctamente";
        this.status = true;

        this.frontVideo = null;
        this.middleVideo = null;
        this.backVideo = null;
        this.filesExists = false;

      }, error => {
        this.message = `Ha ocurrido un problema al subir los archivos. ${error.error.message}`;
        this.status = false;
      });
    }
  }
}
