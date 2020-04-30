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
  videoClass: string = "";

  constructor() {}

  ngOnInit(): void {
    switch (this.videos.length) {
      case 1:
        this.videoClass = "col-12"
        break;
      case 2:
        this.videoClass = "col-12 col-md-6"
        break;
      case 3:
        this.videoClass = "col-12 col-md-6 col-lg-4"
        break
    }

  }

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
