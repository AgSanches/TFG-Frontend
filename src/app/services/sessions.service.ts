import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from './variables';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(
    private http: HttpClient,
  ) {}

  getSessions(dog_id: number, sortby: string = 'updated_at', orderby: string = 'desc'): Observable<any>{
    return this.http.get(url + `/dog/sessions/${dog_id}/${sortby}/${orderby}`)
  }

  getSessionsByName(dog_id: number, name:string ,sortby: string = 'updated_at', orderby: string = 'desc'): Observable<any>{
    return this.http.get(url + `/dog/sessions/${dog_id}/${name}/${sortby}/${orderby}`)
  }


}
