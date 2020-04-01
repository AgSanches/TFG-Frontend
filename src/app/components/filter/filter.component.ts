import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
declare var $:any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  @Output() filterEmitter = new EventEmitter<string>();
  @Output() filterSortEmitter = new EventEmitter<Array<any>>();
  searchKeyUp: Observable<any>;
  date: boolean = true;
  asc: boolean = false;

  constructor() {

  }

  ngOnInit(): void {

    this.searchKeyUp = fromEvent( $('#searchKeyup'), 'keyup').pipe(
      map((e:any) => e.target.value),
      debounceTime(400),
      distinctUntilChanged()
    );

    this.searchKeyUp.subscribe( (data:string) => {
      this.filterEmitter.emit(data);
    });
  }

  ngOnDestroy(): void {
    this.searchKeyUp.subscribe();
  }

  sortBy(date: boolean, asc: boolean) {
    this.date = date;
    this.asc = asc;
    this.filterSortEmitter.emit([date, asc]);
  }
}
