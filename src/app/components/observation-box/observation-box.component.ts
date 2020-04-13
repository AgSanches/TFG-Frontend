import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-observation-box',
  templateUrl: './observation-box.component.html',
  styleUrls: ['./observation-box.component.scss']
})
export class ObservationBoxComponent implements OnInit {

  @Input() observation: string;

  constructor() { }

  ngOnInit(): void {
  }

}
