import { Injectable } from '@angular/core';
import {url} from './variables';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient,
  ) {

  }

  register(user:User): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url + '/register', {
      "email": user.email,
      "password": user.password,
      "name" : user.name,
      "surname": user.surname
    }, {headers: headers});
  }

  login(email:string, password: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(url + '/login', {
      "email" : email, "password" : password }, {headers: headers});
  }

  log_user(name:string, surname:string, access_token:string, refresh_token:string ){
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
  }

  logout() {
    localStorage.clear()
  }
}
