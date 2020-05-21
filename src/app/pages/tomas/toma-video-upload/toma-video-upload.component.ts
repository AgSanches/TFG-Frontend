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

  message: string = "";
  status: boolean;

  constructor(
    private tomasService: TomasService
  ) { }

  ngOnInit(): void {

  }

  checkVideo(target: any, position: number = 1){

  }
}
