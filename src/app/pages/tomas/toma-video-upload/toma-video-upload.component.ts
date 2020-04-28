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

  frontVideoFile: File;
  middleVideoFile: File;
  backVideoFile: File;

  @Input() toma: Observable<Toma>;
  @Output() fileEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  message: string = "";
  status: boolean;

  constructor(
    private tomasService: TomasService
  ) { }

  ngOnInit(): void {
    this.toma.subscribe(value => {
      if (value && this.frontVideoFile || this.middleVideoFile || this.backVideoFile){
        this.tomasService.uploadVideo(value.id, this.frontVideoFile, this.middleVideoFile, this.backVideoFile).subscribe(() => {
          this.message = "Videos subidos correctamente.";
          this.status = true;
          this.fileEmitter.emit(true);
        }, () => {
          this.message = "Ha ocurrido un problema en la subida de los videos.";
          this.status = false;
          this.fileEmitter.emit(false);
        })
      } else {
        this.fileEmitter.emit(true);
      }
    })
  }

  checkVideo(target: FileList, position: number = 1){
    switch (position) {
      case 1:
        this.frontVideoFile = target[0];
        break;
      case 2:
        this.middleVideoFile = target[0];
        break;
      default:
        this.backVideoFile = target[0];
    }
  }
}
