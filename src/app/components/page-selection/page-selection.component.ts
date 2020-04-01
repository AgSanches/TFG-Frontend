import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-page-selection',
  templateUrl: './page-selection.component.html',
  styleUrls: ['./page-selection.component.scss']
})
export class PageSelectionComponent implements OnInit {

  currentPage: number = 1;
  @Output() currentPageEmitter = new EventEmitter<Array<any>>();
  @Input() itemsObservable: Observable<Array<any>>;
  @Input() pageSize: number = 16;
  items: Array<any>;
  hasNext: boolean;

  pager: any = {};

  constructor() {
  }

  ngOnInit(): void {
    this.itemsObservable.subscribe(data => {
      this.items = data;
      this.currentPage = 1;
      this.hasNext = (this.currentPage * this.pageSize) <= this.items.length;
    });
  }

  changePage(value: number) {

    this.currentPage += value;
    this.hasNext = (this.currentPage * this.pageSize) <= this.items.length;

    let start = (this.currentPage - 1) * this.pageSize;

    let pageItems = this.items.slice(
      start, start + this.pageSize
    );

    this.currentPageEmitter.emit(pageItems);
  }

}
