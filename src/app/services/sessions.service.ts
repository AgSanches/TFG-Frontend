import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from './variables';
import {Observable} from 'rxjs';
import {Session} from '../models/Session';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(
    private http: HttpClient,
  ) {}

  getSession(session_id: number): Observable<Session> {
    return this.http.get(`${url}/dog/session/${session_id}`).pipe(
      map((session:Session) => {
        return session;
      })
    )
  }

  getSessions(dog_id: number): Observable<any>{
    return this.http.get(`${url}/dog/sessions/${dog_id}`)
  }

  getSessionsByName(dog_id: number, name:string ): Observable<any>{
    return this.http.get(`${url}/dog/sessions/${dog_id}/${name}`)
  }

  createSession(dog_id: number, name: string): Observable<Session> {
    return this.http.post(`${url}/dog/session/manage`, {name: name, dog_id: dog_id}).pipe(
      map((session:Session) => {
        return session;
      })
    )
  }
}
