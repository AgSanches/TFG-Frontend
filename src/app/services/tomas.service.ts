import { Injectable } from '@angular/core';
import { url } from './variables';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Toma} from '../models/Toma';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TomasService {

  constructor(
    private http: HttpClient
  ) {

  }

  getTomasByName(id: number, name: string): Observable<Toma[]> {
    return this.http.get(`${url}/dog/toma/${id}/${name}`).pipe(
      map((tomas:any) => tomas.tomas ),
      map((tomas:Toma[]) => {
        return tomas.map((toma:Toma) => {
          return toma;
        })
      })
    )
  }

}
