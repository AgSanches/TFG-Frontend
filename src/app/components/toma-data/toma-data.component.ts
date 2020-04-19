import {Component, Input, OnInit} from '@angular/core';
import {Toma} from '../../models/Toma';
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
  sensors: string[] = [];
  play: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor() { }

  ngOnInit(): void {
    this.videos = [this.toma.video_front, this.toma.video_middle, this.toma.video_back];
    this.sensors = [this.toma.sensor_data_front, this.toma.sensor_data_back];
  }

  togglePlay(play: boolean){
    this.play.next(play);

    const query = $('video');
    query.each( function() {
      (play)? $(this).get(0).play(): $(this).get(0).pause();
    });
  }

}
