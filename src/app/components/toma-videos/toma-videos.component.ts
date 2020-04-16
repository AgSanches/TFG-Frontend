import {Component, Input, OnInit} from '@angular/core';
import {url} from '../../services/variables';
declare var $: any;

@Component({
  selector: 'app-toma-videos',
  templateUrl: './toma-videos.component.html',
  styleUrls: ['./toma-videos.component.scss']
})
export class TomaVideosComponent implements OnInit {

  @Input() videos: string[] = [];
  @Input() tomaId: number;
  play: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  togglePlay(play: boolean){
    this.play = play;
    const query = $('video');
    query.each( function() {
      (play)? $(this).get(0).play(): $(this).get(0).pause();
    });
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
