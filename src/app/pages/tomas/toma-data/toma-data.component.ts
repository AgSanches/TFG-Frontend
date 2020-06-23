import {Component, Input, OnInit} from '@angular/core';
import {Toma} from '../../../models/Toma';
import {BehaviorSubject} from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-toma-data',
  templateUrl: './toma-data.component.html',
  styleUrls: ['./toma-data.component.scss']
})
export class TomaDataComponent implements OnInit {

  @Input() toma: Toma;
  videos: string[] = [];
  sensorsLameness: string[] = [];
  sensorsAngles: string[] = [];
  play: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  message: string;

  showLamelessGraphs: boolean = false;
  showAnglesGraphs: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.videos = [this.toma.video_front, this.toma.video_middle, this.toma.video_back].filter(value => value != null);
    this.sensorsLameness = [this.toma.sensor_data_front, this.toma.sensor_data_back].filter(value => value != null);
    this.sensorsAngles = [this.toma.sensor_data_foot_upper, this.toma.sensor_data_foot_lower].filter(value => value != null);

    this.message = `La toma no cuenta con los elementos requeridos,
    actualmente cuenta con ${this.videos.length} videos y debe contar con almenos 1,
    además cuenta con ${this.sensorsLameness.length} archivos en relación con los sensores
    y tienen que existir ambos archivos.`
  }

  togglePlay(play: boolean){
    this.play.next(play);
    const query = $('video');
    query.each( function() {
      (play)? $(this).get(0).play(): $(this).get(0).pause();

    });
  }

  showGraphs(lameless: boolean, angles: boolean) {
    this.showLamelessGraphs = lameless;
    this.showAnglesGraphs = angles;
  }
}
