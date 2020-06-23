import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {url} from './variables';
import {Observable} from 'rxjs';
import {Session} from '../models/Session';
import {Toma} from '../models/Toma';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(
    private http: HttpClient,
  ) {}

  getSession(session_id: number): Observable<Session> {
    return this.http.get<Session>(`${url}/dog/session/${session_id}`);
  }

  getSessions(dog_id: number): Observable<Session[]>{
    return this.http.get<Session[]>(`${url}/dog/sessions/${dog_id}`)
  }

  getSessionsByName(dog_id: number, name:string ): Observable<Session[]>{
    return this.http.get<Session[]>(`${url}/dog/sessions/${dog_id}/${name}`)
  }

  createSession(dog_id: number, name: string): Observable<Session> {
    return this.http.post<Session>(`${url}/dog/session/manage`, {name: name, dog_id: dog_id});
  }

  updateSession(id: number, name: string, observation: string): Observable<Session> {
    return this.http.put<Session>(`${url}/dog/session/${id}`, {
      name: name,
      conclusion_expert: observation
    })
  }
}
