import {Component,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toma-file-description',
  templateUrl: './toma-file-description.component.html',
  styleUrls: ['./toma-file-description.component.scss']
})
export class TomaFileDescriptionComponent implements OnInit {

  @Input() fileName: string;

  constructor(

  ) {}

  ngOnInit(): void {
  }
}
