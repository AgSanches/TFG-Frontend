import { Injectable } from '@angular/core';
import {url} from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Dog} from '../models/Dog';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getDogs(limit: number = 250, offset = 0, orderby = "updated_at", method="desc"): Observable<any>{
    return this.http.get(url + `/dogs/${limit}/${orderby}/${method}/${offset}` ).pipe(map((dog:Dog) => {
      return dog;
    }));
  }

  getDogsByName(name:string): Observable<any>{
    return this.http.get(url + "/dog/name/" + name).pipe(map((dog:Dog) => {
      return dog;
    }));
  }

  getDog(){
    // TODO
  }

  createDog(){
    // TODO
  }

  updateDog(){
    // TODO
  }

  deleteDog(){
    // TODO
  }

  getCountDogs():Observable<any> {
    return this.http.get(url + '/count/dog');
  }
}
