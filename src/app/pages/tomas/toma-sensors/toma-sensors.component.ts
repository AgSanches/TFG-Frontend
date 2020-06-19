import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TomasService} from '../../../services/tomas.service';
declare var $: any;

@Component({
  selector: 'app-toma-sensors',
  templateUrl: './toma-sensors.component.html',
  styleUrls: ['./toma-sensors.component.scss']
})
export class TomaSensorsComponent implements OnInit {

  @Input() tomaId: number;
  @Input() sensors: string[];
  @Input() observable: Observable<boolean>;

  labels: Array<number> = [];
  front_sensor: Array<number> = [];
  back_sensor: Array<number> = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    fill: false
  };

  public barChartLabels = this.labels;
  public barChartType = 'line';

  public barChartData = [
    {data: [], label: 'Datos sensores delanteros'},
    {data: [], label: 'Datos sensores traseros'}
  ];

  private interval;

  constructor(
    private tomasService: TomasService
  ) {

  }

  ngOnInit(): void {

    this.tomasService.readSensor(this.tomaId).subscribe(value => {
      this.labels.push(...value.labels);
      this.front_sensor.push(...value.data.front_data);
      this.back_sensor.push(...value.data.back_data);
    });

    if(this.observable != null){
      this.observable.subscribe(value => {
        if (value){
          this.interval = setInterval(() => {
            const video = $('video').get(0);
            const limit = parseInt(String(video.currentTime * (this.labels.length/video.duration)))
            this.barChartData[0].data = this.front_sensor.slice(0, limit);
            this.barChartData[1].data = this.back_sensor.slice(0, limit);

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
