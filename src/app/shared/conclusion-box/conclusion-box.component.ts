import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conclusion-box',
  templateUrl: './conclusion-box.component.html',
  styleUrls: ['./conclusion-box.component.scss']
})
export class ConclusionBoxComponent implements OnInit {

  @Input() conclusion: string;
  outputString: string = "";

  constructor() {

  }

  ngOnInit(): void {
    if (this.conclusion) {
      this.outputString = parseInt(this.conclusion) >= 0.5 ? 'tiene cojera' : 'está sano'
    }
  }

}
