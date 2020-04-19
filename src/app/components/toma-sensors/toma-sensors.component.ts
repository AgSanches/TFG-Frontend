import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-toma-sensors',
  templateUrl: './toma-sensors.component.html',
  styleUrls: ['./toma-sensors.component.scss']
})
export class TomaSensorsComponent implements OnInit {

  @Input() tomaId: number;
  @Input() sensors: string[];
  @Input() observable: Observable<boolean>;


  labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  data1 = [65, 59, 80, 81, 56, 55, 40];
  data2 = [28, 48, 40, 19, 86, 27, 90];

  lastYear = 2012;

  constructor() {

  }

  ngOnInit(): void {
    if(this.observable != null){
      this.observable.subscribe(value => {
        if (value){
          setTimeout( () => {
            this.lastYear += 1
            this.labels.push(String(this.lastYear));
            this.data1.push(20);
            this.data2.push(30);
          }, 3000);
        }
      })
    }
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    fill: false
  };

  public barChartLabels = this.labels;
  public barChartType = 'line';


  public barChartData = [
    {data: this.data1, label: 'Series A'},
    {data: this.data2, label: 'Series B'}
  ];

}
