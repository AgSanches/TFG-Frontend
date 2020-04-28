import {Component, Input, OnInit} from '@angular/core';
import {url} from '../../../services/variables';


@Component({
  selector: 'app-toma-videos',
  templateUrl: './toma-videos.component.html',
  styleUrls: ['./toma-videos.component.scss']
})
export class TomaVideosComponent implements OnInit {

  @Input() videos: string[] = [];
  @Input() tomaId: number;

  constructor() {}

  ngOnInit(): void {}

  getVideo(video: string) {
    let target = "back";

    if (video.indexOf('front') != -1){
      target = 'front';
    } else if (video.indexOf('middle') != -1){
      target = 'middle'
    }

    return `${url}/dog/toma/video/${this.tomaId}/${target}`;
  }
}
