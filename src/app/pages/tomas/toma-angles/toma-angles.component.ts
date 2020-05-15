import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TomasService} from '../../../services/tomas.service';
declare var $: any;

@Component({
  selector: 'app-toma-angles',
  templateUrl: './toma-angles.component.html',
  styleUrls: ['./toma-angles.component.scss']
})
export class TomaAnglesComponent implements OnInit {

  @Input() tomaId: number;
  @Input() sensors: string[];
  @Input() observable: Observable<boolean>;

  labels: Array<number> = [];
  upperSensor: Array<number> = [];
  lowerSensor: Array<number> = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    fill: false
  };

  public barChartLabels = this.labels;
  public barChartType = 'line';

  public barChartData = [
    {data: [], label: 'Ángulo de la pata en grados'},
  ];

  interval;

  constructor(
    private tomasService: TomasService
  ) {

  }

  ngOnInit(): void {

    this.tomasService.readSensor(this.tomaId).subscribe(value => {
      this.labels.push(...value.labels);
      this.upperSensor.push(...value.data.front_data);
      this.lowerSensor.push(...value.data.back_data);
    });

    if(this.observable != null){
      this.observable.subscribe(value => {
        if (value){
          this.interval = setInterval(() => {
            const video = $('video').get(0);
            const limit = parseInt(String(video.currentTime * (this.labels.length/video.duration)))
            this.barChartData[0].data = this.upperSensor.slice(0, limit);

            if (video.currentTime == video.duration){
              clearInterval(this.interval);
            }

          }, 500)

        }
        else {
          if (this.interval){
            clearInterval(this.interval);
          }
        }
      })
    }
  }

}
